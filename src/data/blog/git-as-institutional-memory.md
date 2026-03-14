---
author: "Ning Zhao"
pubDatetime: 2026-03-14T21:02:00Z
modDatetime: 2026-03-14T21:02:00Z
title: "Git as Institutional Memory"
slug: "git-as-institutional-memory"
ogImage: ../../assets/images/Stacks_HERO.jpg
draft: false
tags:
  - governance
  - systems-thinking
  - institutional-memory
  - git
  - version-control
  - digital-civilisation
  - infrastructure-as-code

description: "Why Git is not a developer tool, but the substrate of institutional memory, governance, and accountability."

---

![Institutional archive — towering shelves of boxes stretching into the distance, a lone figure walking between them.](@/assets/images/Stacks_HERO.jpg)
<figcaption style="font-size: 0.9em; color: #666; margin-top: 0.5em;">
  Photograph by Alex Boerner, <a href="https://today.duke.edu/2019/04/protecting-pages" target="_blank" rel="noopener">Duke Today</a>.
</figcaption>

## I. The Trouble with Forgetting

Every large institution suffers from a distinctive ailment. It is not a lack of intelligence, nor a shortage of goodwill. It is a quiet, persistent inability to remember clearly.

Decisions are made in meetings, recorded in minutes, filed in folders, and gradually forgotten. Documents are written, revised, copied, emailed, revised again, and stored in locations that multiply faster than anyone can track. A specification is approved in February; by June, three versions exist on three servers, and no one can say with certainty which one governs.

This is not carelessness. It is the natural consequence of tools that were designed for *sharing*, but not for *remembering*.

SharePoint, shared drives, email attachments, Confluence pages — these are instruments of distribution. They move documents from one place to another with admirable efficiency. What they do not do, and were never designed to do, is answer a simple but consequential question:

*What changed, when, why, and by whom?*

When a field is added to a specification, when a validation rule is softened, when a deadline is moved — the document changes, but the reason is lost. The previous version is overwritten or buried. The person who made the change may remember for a while, but memory is personal and impermanent. When that person moves to a different project, the institution forgets.

In a programme of modest scope, this forgetting is manageable. People compensate with meetings, with emails, with the informal networks of trust that sustain all human organisations.

But when the programme grows to hundreds of people across multiple institutions, when the artefacts number in thousands and the consequences of error are measured in legal liability and public trust — then forgetting becomes structural. It is no longer a nuisance. It is a risk.

## II. What Shared Drives Cannot Provide

Consider the lifecycle of a document in a typical institutional workflow.

An architect writes a specification. She saves it to a shared folder. A colleague reviews it and saves a revised copy alongside the original, perhaps with "_reviewed_by_Bob_20260315" appended to the filename. A third colleague, working from a different office, downloads the document, makes corrections, and uploads it to a different folder. A project manager, preparing a governance report, searches for the authoritative version and finds four candidates.

The institution now faces a problem that no amount of intelligence can resolve: the history of the document is scattered across filesystems, email threads, and human memory. The current state may be recoverable with effort. The history — the sequence of decisions, the reasoning behind each change, the alternatives once considered — is effectively lost.

Shared drives and document servers were built to store and retrieve files. They were not built to preserve the _story_ of a file — the narrative of its evolution over time.

And yet, it is precisely this story that institutions need most. An auditor does not merely ask, "What does the specification say?" She asks, "When was this rule introduced? What did it replace? Who approved the change? Was the downstream impact assessed?" These are questions about history, not about content. And history requires a different kind of infrastructure.

## III. A Ledger, Not a Filing Cabinet

The tool that solved this problem already exists. It is called Git, and it was created in 2005 by Linus Torvalds — the engineer behind Linux, the operating system that quietly runs the world's most critical financial infrastructure, rockets, and the vast majority of the internet. Torvalds changed the shape of civilisation twice: first with an operating system, then with a way of remembering. Today, millions of projects are governed through Git — among them those maintained by governments, central banks, and international institutions. The infrastructure of modern civilisation does not merely run on software; it runs on software whose history is preserved by Git.

Yet Git is widely perceived as a _developer tool_, belonging to programmers and having no place in the world of policy or institutional management. This is a mistake.

At its core, Git is not about software development. It is about _memory_. Specifically, it is about giving an institution the ability to remember every change ever made to every document it governs — who made the change, when, and why — in a way that is permanent, verifiable, and impossible to silently alter.

If a shared drive is a filing cabinet, Git is a _ledger_. Every entry is dated, attributed, and linked to the entries before and after it. The entire history of every document is preserved, not as a stack of disconnected versions, but as a continuous, searchable narrative.

This distinction — between _storage_ and _memory_ — is the heart of the matter.

In effect, Git provides what institutions have always valued: a reliable archive of decisions, but one that operates at the speed and scale of modern collaboration.

## IV. Five Qualities of Institutional Memory

What does Git provide that a shared drive or a document management system does not? The answer is not a list of features, but a set of qualities — qualities that any serious institution, whether it knows the word "Git" or not, already desires.

### 1. Every change is visible

When a document is modified — a rule added, a field renamed, a diagram redrawn — the change is recorded as a precise, line-by-line difference. Not a new copy of the entire file, but the exact lines that were altered. A reviewer can see, at a glance, what was added, what was removed, and what was left untouched.

This is the equivalent of track changes in a word processor, but applied permanently, to every document, across the entire programme, for the entire duration of the project. It cannot be turned off, and it cannot be lost.

![An amendment to the German Constitution in 2017, rendered as a Git diff. Red lines show the previous text; green lines show the new. The exact change is visible at a glance.](@/assets/images/grundgesetz-art109a-git-diff.png)
<figcaption style="font-size: 0.9em; color: #666; margin-top: 0.5em;">
  <em>An amendment to Article 109a of the German Constitution in 2017, rendered as a Git diff.</em> Red lines: previous text. Green lines: new text. Every word of change is visible, attributable, and permanent.<br>
  Source: <a href="https://github.com/c3e/grundgesetz/commit/4fb56d5525932ad9a25728fea5da0382a9638e4a#diff-5991a06ef144cff70140ac0c5c6bf67f17e45a4c60f87d1860a88e1160f5217c" target="_blank" rel="noopener">github.com/c3e/grundgesetz</a>
</figcaption>

### 2. Every change carries a reason

Each modification is accompanied by a message — written by the person who made the change — explaining _why_ it was made. "Added validation rule VAL-REG-09 for maximum holding limit, per Rulebook v0.91." "Corrected Response-Timestamp type from string36 to ISODateTime (copy-paste error in PI2 data model spec)."

Over time, these messages accumulate into a decision log that no meeting minutes could replicate: precise, attached to the exact change they describe, and permanently searchable.

### 3. Nothing is silently overwritten

In a shared drive, saving a file replaces its predecessor. The old version may exist in a backup, but finding it requires effort, luck, or the intervention of an IT department.

In Git, the previous state of every document is always available. One can retrieve the exact text of a document as it stood on any date — last Tuesday, six months ago, the day before a regulation changed. It is the fundamental architecture of the system.

### 4. Changes are reviewed before they take effect

Git introduces a practice that institutions have long understood in other domains but rarely enforced for their documents: _formal review before publication_.

When someone proposes a change — to a specification, a data contract, a governance rule — the change does not immediately take effect. Instead, it is submitted as a *proposal*. Colleagues can inspect every modified line, leave comments, request corrections, and ultimately approve or reject the change before it becomes part of the authoritative record.

This is the institutional equivalent of a four-eyes principle, applied to the knowledge base itself. No change enters the record without scrutiny. No decision is made in isolation.

### 5. The authoritative version is never in doubt

At any moment, there is one and only one authoritative state of each document: the version that has passed through review and been accepted. There are no competing copies, no ambiguous filenames, no emails asking "Is this the latest?"

The authoritative record is always the same, for every person in the programme, regardless of which institution they belong to or which country they work from. It is the _single source of truth_ — not by convention, but by mechanism.

## V. What This Means for Governance

These five qualities are not technical conveniences. They are the preconditions for something that every regulated institution seeks: _auditable governance_.

When an external auditor asks how a specification evolved, the answer is not a reconstruction from meeting minutes and email archives. It is a verifiable, timestamped, attributed record of every change, every reason, and every approval.

When a legal question arises about when a rule was introduced or who approved its removal, the answer is not "we believe it was discussed in a meeting last autumn." It is a precise entry in a ledger that cannot be altered after the fact.

When a new colleague joins the programme — the 521st person in a consortium that spans 10 institutions — she does not spend weeks asking who to contact and which folder to search. She reads the README.md and the commit history. The institution's knowledge map and memory is available to her on the first day, in full, without mediation.

This is not a marginal improvement. It is a structural transformation in how institutional knowledge is preserved and transmitted.

![A Git commit rendered as an official parchment document — with commit hash, authors, dates, a diff showing changes, and formal signatures with a governance seal.](@/assets/images/git_parchment.webp)
<figcaption style="font-size: 0.9em; color: #666; margin-top: 0.5em;">
  <em>A Git commit, reimagined as a governance document.</em> Every commit is, in effect, a signed, dated, attributable entry in an institutional ledger — recording not just what changed, but who changed it, and when.
</figcaption>

## VI. What Becomes Possible

The qualities described above — visibility, attribution, permanence, review, authority — are valuable in themselves. But they also create the preconditions for something further: _automation that was previously unimaginable_.

Consider a practical example: **impact analysis**. In a large programme, a change to the rulebook should propagate through architecture, specifications, API schemas, tests, and implementation. When these artefacts live in SharePoint and Confluence across separate institutional servers, assessing the downstream impact of a single rule change becomes an exercise in archaeology. Someone must log into multiple systems, search manually through documents in various formats, and reconstruct the chain of dependencies from memory and experience. The result is slow, incomplete, and unrepeatable.

When the same artefacts live as structured text in Git repositories, a search command can traverse every specification, every API schema, every test case, every implementation in seconds — identifying every document that references the changed rule, every field that depends on it, every validation that enforces it. This does not require advanced technology. It requires only that the artefacts are text, that they are searchable, and that they live in a system designed for exactly this kind of traversal. With the addition of modern AI, the analysis becomes richer — capable of understanding not just textual references, but semantic dependencies. Yet even without AI, the basic capability already exceeds what any manual process can achieve.

Consider a second example: **executive reporting**. In a conventional setup, progress reporting requires status meetings, manually assembled slide decks, and summaries written from memory. When all artefacts are governed through Git, the raw material for reporting already exists: every change, every reason, every approval is recorded in the system's own history. An automated process can collect the changes made across all repositories during a given period, and — with or without AI assistance — produce a concise, accurate summary of what was accomplished, what changed, and what remains open. The executive receives clarity without convening a meeting. The teams are not interrupted. The report is grounded in evidence, not recollection.

These are not speculative possibilities. They are straightforward consequences of a single architectural decision: to govern institutional artefacts as structured text, in a system that was built to remember.

None of this is easily executable when documents live as binary files on shared drives. Because the medium does not permit it.

## VII. The Objection, and Its Answer

The most common objection is a practical one: "Git is a tool for programmers. Our people are policy analysts, legal experts, economists. They cannot be expected to learn a developer tool."

Git was indeed created by and for software engineers, and its command-line interface reflects that origin. It is not, in its raw form, an intuitive tool for someone accustomed to graphical document editors. This is a real barrier, and it would be dishonest to dismiss it.

But the objection confuses the *mechanism* with the *interface*. The mechanism — the ledger of changes, the review process, the permanent history — is universal. The interface through which people interact with that mechanism has evolved considerably.

Modern platforms such as GitLab provide a web-based environment in which documents can be browsed, changes reviewed, comments attached, and approvals granted — all through a graphical interface not fundamentally different from the collaboration tools that institutions already use. The underlying mechanism is Git; the experience is familiar.

The investment required is real but modest. Markdown, the format in which documents are written, can be learned in minutes. The review and approval workflow on GitLab can be demonstrated in an afternoon. Git itself — the part that involves creating branches and recording changes — requires structured training, perhaps two days, with hands-on exercises using real programme documents rather than abstract examples.

This is a tiny investment compared to what most institutions make in adopting a trendy project management methodology with many ceremonies. And unlike those investments, the return is tangible, measurable, and compounds over time: every document added to the system, every change recorded, every review completed adds to the institutional memory. The system becomes more valuable with each passing month.

## VIII. From Filing to Remembering

We began with a familiar observation: institutions forget. Because the tools they use were designed for distribution, not for memory.

The shift from shared drives to version-controlled repositories is not a technology upgrade. It is a change in what an institution is *able to do*. It becomes able to answer questions it could not answer before — not about what a document says today, but about how it came to say what it says, and whether the journey was deliberate.

In a [companion essay](https://code-and-civilisation.vercel.app/posts/markdown-as-institutional-infrastructure), I suggested that Markdown is the mortar of institutional infrastructure — the means by which documents become structured, portable, and machine-readable. If that is so, then Git is the _substrate_ — the mechanism by which those documents acquire history, accountability, and the quiet authority that comes from knowing that nothing has been silently changed.

Kenneth Clark once observed that civilisation depends not only on energy and talent, but on the patient accumulation of small, careful acts — the preservation of knowledge, the maintenance of standards, the refusal to let important things be forgotten, a sense of permanence. In the digital age, these acts require digital infrastructure. Not glamorous, not fashionable, not performative, but indispensable.

Git is that civic infrastructure. It is not a developer tool that happens to be useful for institutions. It is an institutional tool that happens to have been invented by developers.

And the institutions that adopt it will find, in time, that they remember more clearly, decide more confidently, and move with the kind of momentum that comes not from haste, but from knowing exactly where they stand.
 

