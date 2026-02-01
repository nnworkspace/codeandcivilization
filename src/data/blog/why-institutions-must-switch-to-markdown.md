---
author: "Ning Zhao"
pubDatetime: 2026-02-01T08:51:00Z
modDatetime: 2026-02-01T08:51:00Z
title: "Why Your Institution Must Switch to Markdown"
slug: "why-your-institution-must-switch-to-markdown"
draft: true
tags: 
  - governance
  - systems-thinking
  - artificial-intelligence
  - philosophy
  - Markdown
  - elan

description: ""

---

## I. When Appearance Overrides Structure

In the most superficial sense, Markdown is about documents.

Most people in traditional institutions are familiar with editors like Microsoft Word. In that world, how a document looks often dominates what it means. Semantic structure is not embedded in the format itself; it must be inferred from visual appearance.

Writers have many ways to decorate their meaning. The abundance of formatting options makes the mapping between structure and appearance inconsistent — not only within a single document, but especially across hundreds of documents in large programmes involving multiple teams and institutions.

As a consequence, in any modern workflow where documents must be processed by other software, extracting reliable semantic structure becomes difficult.

Another technical dimension of this problem is that most common document formats are proprietary and defined by complex schemas. High-quality, low-cost processing tools — essential in an automation-heavy environment — are rare. Even when such tools exist, the complexity of the format makes the parsing logic difficult to maintain and evolve, generating technical debt and friction across the application landscape of the institution.

And then there is the human side.

Most people do not remember where to click to achieve a specific visual effect. Writing a document is easy to start, but surprisingly hard to master. Attention drifts from *what needs to be said* to *how it should look*.

Attempts have been made to address these problems. LaTeX, for example, stores documents as structured text, but is too complex for everyday institutional use. HTML is also text-based, but too verbose and not designed for comfortable human writing.

Markdown changed everything.

Its syntax for expressing structure is so small and intuitive that almost anyone can learn it in minutes. After a short period of use, the handful of symbols becomes second nature.

And precisely because this syntax is small and explicit, it provides robust leverage for software to understand the structure of the document.

Appearance is not sacrificed. Markdown documents can be transformed into HTML, PDF, or even Word documents. Styling experts can design artistic visual presentations using modern tools, while authors focus entirely on content.

Up to this point, Markdown may still appear to be a tool that makes writing easier and rendering prettier.

That is not the key point.

## II. When Governance Lives Apart from Execution

The real challenge in large institutional programmes is not documents. It is governance, execution, and durability.

Decisions live in meetings and are later filed away in memos.  
Formal requirements live in ticket systems as “stories.”  
Critical business rules live in legacy code, in forgotten or outdated documents, or in people’s heads.  
Documents exist in multiple inconsistent copies, and it becomes difficult to tell which one is authoritative.  
Engineers often cannot explain why a system behaves the way it does, only weeks after implementing it and closing the ticket.

When governance is external to the engineering workflow, drift is inevitable:  
understanding drifts from past decisions, documents drift from one another, requirements drift from policy intent, and implementations drift from requirements.

Much has been adopted in the name of Agile over the past twenty years — roles, ceremonies, metrics. But one decisive principle is often overlooked:

> Everything close to the code — ideally, everything — should be expressed as code.

This principle exists to mitigate drift.

And the most practical way to apply it is surprisingly simple:

**Use Markdown.**

When policy documents, decisions, requirements, and governance artefacts are written in Markdown, they can live in Git repositories alongside the systems they govern. They become discoverable, versioned, comparable over time, and mechanically enforceable by downstream processes — many of which already live in Git.

This co-location of governance artefacts with engineering artefacts is often more important than the physical co-location of people. It makes order, consistency, resilience, and durability easier to achieve in large-scale programmes.

With Markdown in Git, dependence on scattered document servers and collaboration tools is reduced. Licensing and operational costs fall, but more importantly, coherence increases. Governance scales across distributed teams and survives staff turnover.

Large-scale projects such as the Linux kernel, European Digital Identity, or Ethereum rely not on meetings, but on clear governance artefacts in Git and mechanical enforcement through automation. If this approach can sustain such projects, it can sustain large programmes in public institutions as well.

What is required is not a new methodology, but a change in artefacts.

A Markdown + Git literacy programme, from senior management to front-line staff, can transform how institutions record intent, coordinate work, and preserve understanding.

If an institution is like a great Renaissance structure, Markdown is the mortar that holds its stones together.

In this sense, Markdown is not a formatting tool.

It is civil infrastructure.

## III. A Workbench for Durable Intent

This way of thinking is not theoretical for me.

Over the past years, working in large-scale institutional programmes, I repeatedly encountered the same pattern: capable people, good intentions, modern tooling — yet persistent coordination problems caused not by lack of skill, but by the absence of shared, structured, versioned governance artefacts.

During a short break at the end of last year, I decided to turn these observations into something tangible. The result is a demonstrative governance workbench called **Élan**.

Élan is not a tool and not a methodology. It is a concrete example of how policy texts, rulebooks, specifications, tests, code, reports, and automation can live together in a single Git-based environment, all documents written in Markdown, all versioned, and all mechanically enforceable.

It shows what happens when governance is treated not as documentation, but as part of the system itself.

If the ideas in this essay resonate with you, you may find Élan a useful illustration of how Markdown and Git can become the backbone of institutional-scale projects:

- 📦 **The Élan workbench (GitHub)**  
  https://github.com/nnworkspace/elan

- ⚙️ **Élan — A Concise Overview**  
  https://code-and-civilisation.vercel.app/posts/elan-overview

- 📖 **Élan — An Introduction**  
  https://code-and-civilisation.vercel.app/posts/elan-an-introduction


