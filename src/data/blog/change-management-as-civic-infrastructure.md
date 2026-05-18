---
author: "Ning Zhao"
pubDatetime: 2026-05-18T06:15:18Z
modDatetime: 2026-05-18T06:15:18Z
title: "Change Management as Civic Infrastructure"
slug: "change-management-as-civic-infrastructure"
ogImage: ../../assets/images/European-Waterways-23_edited.jpg
draft: false
tags:
  - governance
  - institutional-memory
  - systems-thinking
  - git
  - version-control
  - infrastructure-as-code
  - automation
  - regulated-industries
  - essay
description: "How change management ceases to be a bureaucratic burden and becomes the architecture of institutional trust."
---

## I. The Question Beneath the Bureaucracy

Every large institution must eventually answer for how it changes.

In a regulated environment, the ability to trace, review, reverse, and account for every modification to a system is not an administrative luxury. It is the precondition for trust. Without it, the systems that govern our public and financial lives become opaque, unmoored from their history, and vulnerable to silent failure. We call this discipline change management.

Yet, in many institutions, change management has devolved into parallel bureaucracy. It is pursued through scattered ticketing systems, email chains, and advisory boards that meet far from the actual work. It becomes a ritual of compliance rather than a continuous practice of clarity.

Beneath this familiar bureaucratic surface lies a serious civic question.

> How does an institution change itself, deliberately, without losing the thread of how it became what it is?

Every regulated programme, central-banking project, and serious public institution has some version of this question, whether it is explicit in its governance framework or implicit in its frustrations. The question does not depend on tooling, methodology, or fashion. It is older than any of these. And the answer, when it works, has the same structural shape regardless of medium.

## II. Five Properties, Independent of Tooling

Strip away the procedural vocabulary, and a working change-management regime needs only five properties.

It must be **traceable**. Every change carries an attributable record: who proposed it, who reviewed it, who approved it, what was changed, when, and why. The record persists for the lifetime of the system, and is reconstructable without asking anyone.

It must be **reviewable**. A change is visible *before* it lands, in a form precise enough for a reviewer to form a judgement. The proposal, the rationale, the scope, the projected impact: all are open to inspection. Objections produce a written exchange, and that exchange becomes part of the record.

It must be **reversible**. If a change is wrong, it can be undone, and the undoing is itself recorded as a change. History is not edited; it is extended.

It must be **accountable**. Each change is attributed to a named person, or to a named role held by a named person. Never to "the system" or "the team". Approvals are attributed in the same way.

It must, finally, **carry its own provenance**. The record is available to internal audit, external regulators, and future maintainers without reconstruction from secondary sources.

These properties are not technical preferences. They are the institutional preconditions for trust in the system being changed. Where they are absent, ambiguity accumulates, and trust degrades into rumour. Where they are present, an institution may revise itself with confidence.

## III. The Classical Shape

The classical institutional shape for this discipline, codified in ITIL and adopted across heavily regulated industries for decades, follows a familiar sequence. A *Request for Change* states what is proposed. An *impact assessment* names what it affects. A *Change Advisory Board* reviews. A decision is recorded. The change is *implemented* in a controlled way. A *post-implementation review* verifies that it worked. The artefact is *retained* for the institutional audit horizon.

These checkpoints exist for institutional reasons: regulatory expectation, audit defensibility, organisational risk management. They do not exist to please developers. They do not depend on any particular tooling. They are older than the technologies through which we now express them.

The institutional discipline, then, is venerable and stable. What changes from era to era is only the medium.

## IV. The Translation

The proposition of this essay is simple. Every classical checkpoint has a concrete, machine-enforced counterpart in a git-based programme governance regime. The discipline is preserved; only the medium changes.

The translation is direct enough to write in a table.

| Institutional concept | Git-based artefact |
|:----------------------|:-------------------|
| Request for Change | An issue opened with a template, labelled by type, status, and impact |
| Impact assessment | The impact label, the body of the ticket, and, for cross-cutting work, an explicit cross-repository flag |
| Change Advisory Board review | The Merge Request: required reviewers, automated CI gates, inline-comment discussion, branch protections |
| Approval (or rejection) | The reviewer's *Approve* or *Request changes* on the Merge Request, gated by configured rules |
| Implementation | The squash-merge commit on the integration branch, structured by convention, footer-linked to the originating ticket |
| Release event | An annotated tag on the release branch, accompanied by release notes assembled from the commit range |
| Decision record | An Architecture Decision Record in `decisions/`, recording context, options considered, decision, consequences, re-evaluation triggers |
| Enforcement | Commit hooks locally; lint gates in CI; branch and tag protections at the platform level |
| Post-implementation review | The release object and the cumulative release notes as the announcement and the searchable history; the *Consequences* sections of decision records as the structured review |
| Record retention | The repository itself: cryptographically chained, content-addressed, mirrorable, portable |

A few observations follow from this mapping.

Every institutional checkpoint has a single concrete artefact. None is left as a procedure on paper.

The record is co-located with the work itself. There is no separate change-management database that may drift out of sync with the system being changed.

The "approver" is not an abstract role; it is a named user account, mapped institutionally to a named function. Promotions and demotions are themselves changes, applied through the same regime.

The translation is exact, not approximate. The ITIL sequence is not weakened in the move to git. It is, if anything, strengthened, because the checkpoints are now embedded in the medium of work, and cannot be ignored without ignoring the work itself.

![The Fonserannes staircase of locks on the Canal du Midi, water held by stepped gates and released only in sequence.](@/assets/images/European-Waterways-23_edited.jpg)
<figcaption style="font-size: 0.9em; color: #666; margin-top: 0.5em;">
  <em>Fonserannes Locks, Canal du Midi (1697).</em> Water passes downstream only by entering each chamber in turn, only when one set of gates has closed and the next has not yet opened. Two gates can never be open at once, not because the operators are vigilant, but because the structure forbids it.<br>
  Source: <a href="https://www.europeanwaterways.com/blog/fonserannes-locks/" target="_blank" rel="noopener">European Waterways</a>.
</figcaption>

## V. The Architecture of Trust

Here we arrive at what I take to be the most consequential difference between the traditional regime and the git-based one.

The traditional regime depends on human discipline. The board must convene. The form must be completed. The signature must be obtained. The retention policy must be honoured. Each checkpoint is sustained by the discipline of the people executing it, and discipline, however earnest, decays under pressure.

The git-based regime depends on the discipline embedded in the mechanism. A commit without a reference footer is rejected by the local hook. A malformed decision record is rejected by the lint gate in continuous integration (CI). A branch protected against direct pushes can only be modified through a reviewed Merge Request. A release can only be issued by someone whose role carries that authority.

> Compliance is no longer the path of greatest virtue. It is the path of least resistance.

This is not a small adjustment. It is a structural shift in where the discipline lives. In one regime, the institution must vigilantly maintain its own standards. In the other, the standards are maintained by the medium through which work passes.

Two things follow where this shift succeeds.

The first is that audit ceases to be an interruption. When the artefact and the audit trail are the same object, audit is not a separate activity requiring reconstruction. It is a query. *Show me every change to the label set in the last year* becomes `git log --grep "(labels)"`, returning a complete record in milliseconds. The same question against a Confluence space, an email archive, or a ticketing system takes hours and is incomplete.

The second, and perhaps more important: a regime that is light to follow gets followed. A change-management regime that is heavy to follow gets routed around, eroding the very compliance it was designed to protect. The git-based regime puts the audit-trail-producing step on the author's inevitable path. You cannot merge without it. The parallel bureaucracy, in which the work happens in one place and the record is reconstructed elsewhere, ceases to exist.

## VI. Honest Limits

It would be dishonest to present such a regime without naming what it asks of those who adopt it.

It assumes a baseline of git literacy from the people authoring and managing changes. Reviewers need not be technical: a modern platform renders the diff visually, with comments and approvals in the same interface. But authors must be. For collaborators without git, a tooling layer (a structured editor, a web authoring interface) becomes necessary. The underlying audit-trail mechanics do not change.

Direct user-interface editing of a regulated artefact, such as a Markdown decision record committed through the platform's web editor, bypasses the local commit hook. This is by design: the hook is the convenience layer, the CI is the enforcement floor. But it must be designed for and engineered.

The regime depends on the hosting platform staying available. Mirror clones and external backups remain operational concerns. The artefacts themselves are portable; the access to them is not.

And the regime does not, by itself, satisfy regulatory requirements that demand a *specific* change-management procedure beyond what is described here. Where such a requirement exists, the additional procedure is layered on top of the git-based artefacts, not in place of them.

These are not arguments against the approach. They are the conditions of its honest use.

## VII. The Visible Face of Memory

If [Markdown is the mortar of institutional infrastructure](https://code-and-civilisation.vercel.app/posts/markdown-as-institutional-infrastructure), and [Git is the substrate of institutional memory](https://code-and-civilisation.vercel.app/posts/git-as-institutional-memory), then change management is what those materials enable: the means by which an institution may revise itself, deliberately, with full visibility, and without losing the thread of how it became what it is.

In its most familiar form, change management appears as bureaucratic procedure: a tax on energy, a friction on delivery. In its institutional essence, it is something nobler. It is the discipline by which a serious institution preserves the right to change its mind without losing its memory of having had one.

In its mechanical form, embedded in the medium through which work passes, it ceases to depend on virtue. Compliance becomes the default. Audit becomes a query. Trust becomes structural.

And once an organisation learns to change with confidence, it can move forward with far less fear.
