#!/usr/bin/env node
// Validate blog post tags against the canonical vocabulary in
// src/content.config.ts. Run with --fix to auto-normalise case and spaces.
//
//   pnpm lint:tags        # report only
//   pnpm lint:tags:fix    # rewrite files in place where safe

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const BLOG_DIR = "src/data/blog";
const CONFIG = "src/content.config.ts";
const FIX = process.argv.includes("--fix");

const configSource = readFileSync(CONFIG, "utf8");
const tagsMatch = configSource.match(
  /export const TAGS = \[([\s\S]*?)\] as const/
);
if (!tagsMatch) {
  console.error(`Could not find "export const TAGS = [...] as const" in ${CONFIG}`);
  process.exit(2);
}
const TAGS = [...tagsMatch[1].matchAll(/"([^"]+)"/g)].map(m => m[1]);

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (name.endsWith(".md")) yield path;
  }
}

const normalise = tag => tag.toLowerCase().replace(/\s+/g, "-");

const errors = [];
const fixed = [];

for (const file of walk(BLOG_DIR)) {
  const raw = readFileSync(file, "utf8");
  const m = raw.match(/^(tags:[ \t]*\n)((?:[ \t]*-[ \t]*.+\n)+)/m);
  if (!m) continue;

  const header = m[1];
  const lines = m[2].split("\n").filter(Boolean);
  let modified = false;

  const newLines = lines.map(line => {
    const tagMatch = line.match(/^([ \t]*-[ \t]*)(.+?)[ \t]*$/);
    if (!tagMatch) return line;
    const [, prefix, originalTag] = tagMatch;
    const normalised = normalise(originalTag);

    if (originalTag !== normalised) {
      if (TAGS.includes(normalised)) {
        modified = true;
        return `${prefix}${normalised}`;
      }
      errors.push(
        `${file}: "${originalTag}" -> "${normalised}" (not in canonical vocabulary)`
      );
      return line;
    }

    if (!TAGS.includes(normalised)) {
      errors.push(`${file}: "${originalTag}" not in canonical vocabulary`);
    }
    return line;
  });

  if (modified && FIX) {
    const newBlock = header + newLines.join("\n") + "\n";
    writeFileSync(file, raw.replace(m[0], newBlock));
    fixed.push(file);
  } else if (modified) {
    errors.push(`${file}: casing/spacing fixable with --fix`);
  }
}

if (fixed.length) {
  console.log(`Fixed ${fixed.length} file(s):`);
  fixed.forEach(f => console.log(`  ${f}`));
}

if (errors.length) {
  console.error(`\n${errors.length} tag issue(s):`);
  errors.forEach(e => console.error(`  ${e}`));
  console.error(`\nCanonical vocabulary (edit ${CONFIG} to extend):`);
  TAGS.forEach(t => console.error(`  ${t}`));
  process.exit(1);
}

console.log(`All tags valid (${TAGS.length} in vocabulary).`);
