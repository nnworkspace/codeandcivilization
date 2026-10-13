---
author: "Ning Zhao"
pubDatetime: 2026-10-13T19:59:18Z
modDatetime: 2026-10-13T19:59:18Z
title: "The Contract as Data: How ISDA Rebuilt a Market's Paperwork"
slug: "the-contract-as-data-isda"
ogImage: ../../assets/images/isda-document-stack.jpg
draft: false
tags:
  - governance
  - institutions
  - regulated-industries
  - open-source
  - systems-thinking
  - automation
  - essay
description: "How the derivatives market turned a library of paper contracts, strained by every crisis from the 2005 backlog to Lehman to lockdown, into named clauses, versioned definitions, an open shared model and executable rules, and what a new payment scheme can learn from it."
---

![The ISDA document estate: a contractual stack of Master Agreement, Schedule, Credit Support Annex and Confirmation beside a reference stack of Definitions books, with a Protocol arc wrapped around both.](@/assets/images/isda-document-stack.jpg)
<figcaption style="font-size: 0.9em; color: #666; margin-top: 0.5em;">
  <em>The ISDA document estate.</em> Signed documents on the left, shared Definitions on the right, held together by reference and amended in bulk by Protocols.<br>
  Illustration generated with Gemini.
</figcaption>

## I. A Library Layered by Reference

An over-the-counter derivative is not one contract. It is a stack of documents, each pointing at the others.

At the bottom sits the **ISDA Master Agreement**, a printed form that two firms sign once and rarely touch again. The 1992 and 2002 versions are still both in use. On top of it sits the **Schedule**, where the two parties record their choices: which events count as a default, which law governs, what threshold triggers termination. Beside it sits the **Credit Support Annex (CSA)**, which governs collateral, with its own elections on thresholds, eligible assets and haircuts. Then come the **Definitions** booklets, which give meaning to words like "Floating Rate Option" or "Business Day". Each trade is then recorded in a short **Confirmation** that says, in effect: this trade, under that Master Agreement, using these Definitions.

When the market needs to change all of this at once, for example when a benchmark rate disappears, ISDA publishes a **Protocol**. A firm signs one adherence letter, and the amendment applies to every agreement it holds with every other firm that has adhered.

Put together, the estate looks like this:

| Layer | What it is | Role |
|:---|:---|:---|
| **Master Agreement** (1992, 2002) | One standard text, never edited | The fixed core: events of default, termination, close-out netting |
| **Schedule** | Bilateral elections and amendments to the Master | Where two parties make the standard text their own |
| **Credit Support Annex / Deed** (VM 2016, IM 2016/2018) | Collateral terms | A separate, standard module |
| **Definitions** (2006, 2021 Interest Rate Derivatives, 2014 Credit) | Shared vocabulary and calculation rules | Incorporated by reference, not copied |
| **Confirmations** | The economic terms of each trade | Short, because everything else is incorporated |
| **Protocols** | Multilateral amendments by adherence | One act amends thousands of bilateral agreements (e.g. IBOR Fallbacks 2020) |

The Master, the Schedule, the Confirmations and the Definitions they incorporate form a "single agreement". Each layer has a different owner and rate of change, and they are held together by reference, not by copying.

That phrase carries more weight than it seems to. Section 1(c) of the Master Agreement states that all transactions under it form a single agreement between the parties. If one party goes bankrupt, its administrator therefore cannot cherry-pick: enforce the trades that favour the estate and refuse to pay on the rest. The relationship is terminated as a whole and settled as one net amount (Section 6). This close-out netting is why a portfolio of thousands of trades carries the risk of its net balance rather than its gross sum, and why banks were willing to sign, and pay lawyers to defend, these documents in every jurisdiction where they trade.

The layers also have a clear order of precedence, set out in Section 1(b). Where the Schedule and the printed Master Agreement disagree, the Schedule prevails. Where a Confirmation disagrees with either, the Confirmation prevails, but only for its own transaction: one trade's confirmation cannot rewrite the Master Agreement or reach into the other trades.

Software engineers will recognise the pattern: a base class that nobody touches, a layer of configuration on top, shared libraries imported by name, and a small override in each instance. Where they conflict, the more specific wins, but an override reaches no further than itself. The analogy has a limit, though. In software, the compiler applies the precedence rule; in a contract, it may take a court.

The design is old and, in its way, elegant. Standard text lives in one place; negotiation is confined to elections; amendments travel by reference. But it was built for paper. The elections sit in scanned PDFs. The meaning of a trade is spread across five documents that a machine cannot join. A bank that wants to know "with which counterparties have we agreed a threshold above ten million euro?" sends lawyers to read.

## II. What Paper Cost

For years, the cost of all this paper was paid in back offices and law firms, and it came due at the worst moments.

In the mid-2000s, credit derivatives were traded faster than they could be confirmed. Confirmations went back and forth by fax and were checked by hand. On September 15, 2005, the Federal Reserve Bank of New York called in the fourteen largest dealers, who between them held more than 150,000 unconfirmed trades. Risk was changing hands on terms that the two sides had not yet confirmed in writing.

Then came September 15, 2008, three years to the day after that meeting. Lehman Brothers' US estate was counterparty to more than 900,000 derivative transactions under some 6,000 ISDA Master Agreements. Each counterparty had to find its agreements, read its Schedule, work out its rights, value its trades and serve a termination notice in exactly the form the agreement required, while markets were falling. Even the address mattered. Lehman's London entity had moved to Canary Wharf four years earlier, but many agreements still listed the old office. When ISDA and the administrators later sampled 255 terminated relationships, about 16% of the notices had gone to the old address. Across the portfolio, that could mean as many as 550 termination notices sent to an empty building, each one a potential dispute.

![Photo illustration: the Lehman Brothers headquarters in New York at night, its facade display reading SEP 15 and 8:38 PM, with mountains of contracts, binders and loose sheets piled in front of the building.](@/assets/images/lehman-paper-20080915.jpg)
<figcaption style="font-size: 0.9em; color: #666; margin-top: 0.5em;">
  <em>Photo illustration.</em> Lehman Brothers headquarters, New York, on the evening of September 15, 2008, with the paperwork added.<br>
  Original photo: <a href="https://commons.wikimedia.org/wiki/File:Lehman_Brothers-20080915.jpg" target="_blank" rel="noopener">Robert Scoble</a>, <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener">CC BY 2.0</a>, via Wikimedia Commons; cropped, toned and altered with Gemini.
</figcaption>

After the crisis, regulation added work instead of removing it. The rules on initial margin for uncleared derivatives, phased in from 2016 to 2022, required new collateral documents and custody accounts for every relationship in scope, each by a fixed date. The final phase alone brought in about 775 firms and some 5,400 counterparty relationships, many of them pension funds and asset managers with small legal teams. The documents were nearly identical, and every one was still negotiated by hand.

And the oldest mechanism kept its oldest weakness. A notice of default still had to be delivered physically, often by paying a law firm to carry it to the right door. In 2020, the doors were closed: offices were empty and cities under lockdown. ISDA has since estimated that a delay of one weekend in delivering a single termination notice, on one medium-sized portfolio, can cost an uncollateralised $1 million.

None of this was a technology looking for a use. It was cost, delay and legal risk, paid again with every crisis and every new regulation, by people working against deadlines they could not move.

ISDA's digitalisation over the last decade is a series of answers to these problems. Taken together, they form a case study in how an institution turns its paperwork into infrastructure.

## III. How It Was Digitalised

ISDA did not replace the paper structure with one system. It added a set of complementary components, each attached to one layer of the paper design, and each feeding the next:

![The components of the ISDA digitalisation in three rows: plumbing (Protocols, Notices Hub) acting on the legal side; the legal side running from legal text to standard choices in the Clause Library to negotiation in ISDA Create; and its election data feeding the technical side, which runs from the CDM to executable rules in DRR to messages and identifiers.](@/assets/images/isda-digitalisation-components.png)
<figcaption style="font-size: 0.9em; color: #666; margin-top: 0.5em;">
  <em>From legal text to code.</em> Each component attaches to one layer of the paper design and feeds the next; the plumbing keeps the legal side in motion.
</figcaption>

The principle, as I read it: **the legal text stays authoritative, every choice made within it becomes data with an identifier, and anything computable is computed once from one shared model.**

The sections below take the components one at a time, from the legal end to the technical end, and finish with the plumbing that keeps the whole estate in motion.

### 1. Standard choices: the Clause Library

Most of the negotiated text in a Schedule or a CSA is not new law. It is one of a handful of well-known positions, written slightly differently each time by a different lawyer.

The **ISDA Clause Library** names those positions. For the common Schedule and CSA elections, it publishes a small set of standard variants, each with a stable identifier, defined wording and, where needed, a few variables such as an amount or a currency. Two parties can then agree on "variant 2 of the threshold clause, EUR 10 million" instead of drafting a paragraph.

This is the least technical step, and the one that makes everything after it possible. A free-text paragraph can only be read. A named variant with typed variables can be counted, compared, validated and extracted as data. The legal content does not change. What changes is that the choice is no longer hidden in a paragraph; it is stored as an explicit selection from a known list.

### 2. Negotiation that produces data: ISDA Create

**ISDA Create** is the association's online negotiation platform. It started with the documentation for initial margin, the area where regulation forced thousands of new CSAs to be signed within tight deadlines.

Parties negotiate inside the platform, and the result is two things: the signed document, and **structured election data**. Nobody has to re-key the agreement into a collateral system, or re-read it later to find out what was agreed.

### 3. A versioned vocabulary: the digital Definitions

The 2006 ISDA Definitions, the reference for interest rate trades, had grown by supplement: more than seventy of them over fifteen years. To know what a term meant on a given trade, you had to know which supplements were in force when the trade was agreed and read them in order.

The **2021 ISDA Interest Rate Derivatives Definitions**, which came into use on October 4, 2021, replaced that with a single digital book, published on [ISDA's MyLibrary platform](https://www.isda.org/isda-solutions-infohub/mylibrary/). The supplements were folded in. Each change now produces a new version of the whole book, and a trade can say which version it uses.

Anyone who has worked with software will recognise the move. Instead of a base text plus a pile of changes that each reader had to apply in their head, there is now one complete text per version, with every change already merged in. It sounds like a publishing decision. It is really a decision about how a shared vocabulary is governed.

### 4. One model: the CDM

The [**Common Domain Model (CDM)**](https://cdm.finos.org/) is the component most people mean when they talk about ISDA's digital work.

It is a machine-readable, executable model of what a trade is and what happens to it: products (a swap, an option, a repo), the events in their life (execution, reset, novation, termination), the processes that act on them, and a legal-agreement module that represents the elections behind them. It is written in a small modelling language called **Rune** (earlier named Rosetta), from which code is generated in Java, Python and other languages. A firm can use the generated code as its internal representation, or map its own systems to it.

Two governance choices matter as much as the model itself.

First, the CDM is not owned by one association. It started with ISDA, was joined by ISLA (securities lending) and ICMA (repo and bonds), and was contributed to **FINOS**, the open-source foundation for financial services, in February 2023. It is published under the Community Specification License 1.0 and run jointly by the three associations. Its maintainers include firms such as JPMorgan, REGnosys and TradeHeader.

Second, it is released like software. There are numbered versions, release notes, a public development line and a public repository. CDM 7, announced on August 14, 2026, brought more than 130 changes, including coverage for collateral agreements (CSA, collateral transfer and the GMSLA), ingestion mappings written in Rune itself, and the first parts of a framework for smart contracts. Version 8 is in development.

#### 4.1. Reading the model yourself

The model is readable without being a developer. The repository is at [github.com/finos/common-domain-model](https://github.com/finos/common-domain-model), and the model files sit under `rosetta-source/src/main/rosetta/`. Rune reads almost like structured English.

It helps to be clear about what the CDM is not. It is not the Master Agreement translated word for word into code; that would only be the same contract in another notation. The CDM answers more basic questions afresh: what a trade is, how two systems can tell that they mean the same thing, what an event is made of, and how a change to a trade is recorded. The legal text remains the legal text; the CDM is a second language that corresponds to it. The four examples below take those questions in turn. The code is taken from the CDM repository, with descriptions and some annotations omitted.

One piece of notation first: the numbers in brackets after an attribute are its cardinality. `(1..1)` means exactly one, `(0..1)` means optional, `(1..*)` means at least one, and `(0..*)` means any number.

**Example 1: a trade, and the state it is in.**

```rune
type Trade extends TradableProduct:
    [metadata key]
    tradeIdentifier TradeIdentifier (1..*)
    tradeDate date (1..1)
    tradeTime TimeZone (0..1)
    party Party (0..*)
    partyRole PartyRole (0..*)
    executionDetails ExecutionDetails (0..1)
    contractDetails ContractDetails (0..1)
    collateral Collateral (0..1)

type TradeState:
    [metadata key]
    [rootType]
    trade Trade (1..1)
    state State (0..1)
    resetHistory Reset (0..*)
    transferHistory TransferState (0..*)
    observationHistory ObservationEvent (0..*)
    valuationHistory Valuation (0..*)
```

`Trade` is the transaction itself: at least one trade identifier, exactly one trade date, the parties and their roles, and the execution details, contract details and collateral. It extends `TradableProduct`: a trade is first a tradable product, plus who dealt with whom and on which day.

`TradeState` is where the trade stands now: its stage in the life cycle, and the record of every rate reset, cash transfer, market observation and valuation so far.

Think of `Trade` as the title deed to a house, and `TradeState` as the house's file. Next to the deed, the file holds every renovation, change of ownership and valuation. The deed rarely changes; the file keeps growing.

**Example 2: how a machine recognises an interest rate swap.**

A plain fixed-for-floating interest rate swap is assembled in layers. A `TradableProduct` contains a product whose core is its `EconomicTerms`, and the economic terms contain one or more `Payout`s, the legs. A payout is one of a fixed set of kinds:

```rune
choice Payout:
    AssetPayout
    CommodityPayout
    CreditDefaultPayout
    FixedPricePayout
    InterestRatePayout
    OptionPayout
    PerformancePayout
    SettlementPayout
```

An interest rate swap is two `InterestRatePayout`s: one pays a fixed rate, the other a floating rate. Each leg states who pays and who receives, the notional amount, the day count convention, and the schedule of calculation periods and payment dates.

How does a machine, given a set of economic terms, know that it is looking at a fixed-for-floating swap? The CDM has a family of qualification functions:

```rune
func Qualify_InterestRate_IRSwap_FixedFloat:
    [qualification Product]
    inputs:
        economicTerms EconomicTerms (1..1)
    output:
        is_product boolean (1..1)
            [docReference ISDA Taxonomy_v2 namingConvention "InterestRate_IRSwap_FixedFloat"]

    set is_product:
        Qualify_BaseProduct_IRSwap(economicTerms) = True
            and Qualify_SubProduct_FixedFloat(economicTerms) = True
            and Qualify_Transaction_ZeroCoupon(economicTerms) = False
            and Qualify_Transaction_OIS(economicTerms) = False
```

It reads almost as a sentence. If it is an interest rate swap, and one leg is fixed and the other floating, and it is not a zero-coupon swap, and not an overnight index swap, then it is what the ISDA product taxonomy calls `InterestRate_IRSwap_FixedFloat`. One level down, "is an interest rate swap" requires the asset class to be interest rates, exactly two interest rate legs, a single currency and no inflation rate.

It works the way a birdwatcher identifies a bird: plumage, beak, feet, one feature after another, and only then the name. The name is the conclusion of the observation, not a label stuck on in advance.

**Example 3: how an event is assembled.**

After a trade is executed, things happen to it: a partial termination, a change in notional, a transfer to a third party, an exercise, a rate reset. The CDM defines a small set of primitive instructions, and every business event is composed from them:

```rune
type PrimitiveInstruction:
    contractFormation ContractFormationInstruction (0..1)
    execution ExecutionInstruction (0..1)
    exercise ExerciseInstruction (0..1)
    partyChange PartyChangeInstruction (0..1)
    quantityChange QuantityChangeInstruction (0..1)
    reset ResetInstruction (0..1)
    split SplitInstruction (0..1)
    termsChange TermsChangeInstruction (0..1)
    transfer TransferInstruction (0..1)
    indexTransition IndexTransitionInstruction (0..1)
    stockSplit StockSplitInstruction (0..1)
    observation ObservationInstruction (0..1)
    valuation ValuationInstruction (0..1)
```

Execution, contract formation, exercise, party change, quantity change, reset, split, terms change, transfer, index transition and a few more. A `BusinessEvent` takes a set of instructions and turns one or more "before" trade states into "after" trade states.

Take a partial termination. The CDM has no special data structure for it. It recognises one after the fact:

```rune
func Qualify_PartialTermination:
    [qualification BusinessEvent]
    ...
    set is_event:
        businessEvent -> intent is absent
            and (primitiveInstruction -> quantityChange only exists
                or (primitiveInstruction -> quantityChange, primitiveInstruction -> transfer) only exists)
            and (QuantityDecreased(businessEvent -> instruction -> before only-element, businessEvent -> after) = True)
            and businessEvent -> after -> state -> closedState is absent
```

In plain words: the event contains only a quantity change, or a quantity change plus a cash transfer; the quantity went down; and the trade is still open. Then it is a partial termination. If the quantity falls to zero and the trade closes, it is a different event.

Any musician knows the idea. A piano has no key for C major: the chord is C, E and G played together, and its name follows from the notes. Lower the E by a semitone and the same hand plays C minor. In the CDM, business events are chords built from primitive instructions, and the name of the event is read off the notes.

**Example 4: the end of LIBOR, in data.**

The IBOR Fallbacks Protocol (section 7 below) amended the wording of millions of contracts so that they would switch to new risk-free rates when LIBOR ended. Once the contracts changed, the trade data in every system had to change with them. The CDM has an instruction for exactly that:

```rune
type IndexTransitionInstruction:
    priceQuantity PriceQuantity (1..*)
    effectiveDate date (1..1)
    cashTransfer Transfer (0..1)
```

For each leg it gives the new floating rate index and the spread adjustment, plus the effective date and, where agreed, a cash payment to compensate. The rule that recognises such an event is just as short:

```rune
    set is_event:
        businessEvent -> intent = EventIntentEnum -> IndexTransition
            and floatingRateIndexChanged = True
            and adjustmentSpreadAdded = True
```

The intent is an index transition, the floating rate index has actually changed, and any adjustment spread that is present is not zero.

On the legal side, the Protocol changed the words of the contract. On the data side, the index transition changes the state of the trade. Two records describe the same event. Ideally they correspond one to one, so that each can be checked against the other.

#### 4.2. The Clause Library in the model

The files that start with `legaldocumentation-` cover master agreements, the CSA and confirmations, and the Clause Library has recently arrived there too. On the version 8 development line, added on July 23, 2026, a short file describes how an agreement negotiated with the Clause Library is recorded:

```rune
type ClauseLibrarySchedule:
    clause ClauseLibraryClause (1..*)

type ClauseLibraryClause:
    identifier AssignedIdentifier (1..1)
    counterparty CounterpartyRoleEnum (0..2)
    variant ClauseLibraryClauseVariant (1..*)

type ClauseLibraryClauseVariant:
    identifier AssignedIdentifier (1..1)
    counterparty CounterpartyRoleEnum (0..2)
    variableSet ClauseLibraryVariableSet (0..*)
```

(Descriptions and some fields omitted.) A schedule is a list of clauses. Each clause has one or more variants, so Party A and Party B can elect differently. A variant can carry variables, as name and value pairs, nested at most two levels deep to allow for tables. The file also carries the rules that keep this tidy: a name needs a value, a value needs a name.

What the model does not hold is the legal text. It records which variant each party chose, with an identifier pointing back to the library. The first two boxes of the diagram above, legal text and standard choices, are now joined in a data structure.

For those who want to go further, `pip install finos-cdm` gives the released model as Python classes. At the time of writing the clause library types are not yet in the released package, but the CSA and master agreement elections are.

### 5. Rules as code: DRR

After 2008, regulators in every major jurisdiction required derivatives trades to be reported. Each regime wrote its rules in prose, and each bank translated the prose into its own reporting logic. Hundreds of firms interpreted the same paragraphs separately, and regulators received data that did not line up.

[ISDA's **Digital Regulatory Reporting (DRR)**](https://www.isda.org/isda-solutions-infohub/isda-digital-regulatory-reporting/) takes a different route. Industry working groups agree one interpretation of each rule, and that interpretation is **coded as executable logic on top of the CDM**. Firms can run the code, or test their own systems against it, so they share one interpretation instead of each writing their own. The output can be produced in the ISO 20022 format that regulators increasingly require.

DRR has gone live regime by regime: the US CFTC rewrite on December 5, 2022; Japan on April 1, 2024; EU EMIR Refit on April 29, 2024; UK EMIR on September 30, 2024; Australia and Singapore on October 21, 2024; Canada on July 25, 2025; and Hong Kong on September 29, 2025. ISDA has committed to fourteen regimes in nine jurisdictions, and has added the SEC. Some infrastructure providers now publish their own rules in the same form: Strate, in South Africa, does so for its local reporting rules.

The interesting part is not the code. It is that a group of competitors agreed to share one reading of the law, and to publish it in a form that can be executed, tested and versioned. The interpretation, which used to be private and repeated, became public and shared. A shared reading is not an official one, however. The reporting obligation stays with each firm, the industry's interpretation binds no regulator, and a reading that everyone applies consistently can still be consistently wrong.

### 6. Messages and identifiers: FpML, UPI and UTI

Not every component is new. [**FpML**, the XML standard for derivatives](https://www.fpml.org/) that predates the CDM by two decades, still carries trades between many systems, and the CDM maps to it rather than pretending it is not there.

Identifiers do the quieter work of joining things up. The **UTI** (Unique Transaction Identifier) gives each trade one identity that both parties and every regulator use. The **UPI** (Unique Product Identifier) does the same for the product. Without them, two reports of the same trade cannot be matched, however well the rules are coded.

### 7. The plumbing: Protocols and the Notices Hub

Two pieces of plain infrastructure sit beside the chain and keep the estate in motion.

[**Protocols**](https://www.isda.org/protocols/) are the oldest. They are, in effect, a bulk amendment mechanism for a whole market. The benchmark reform of recent years would have been unworkable without them: thousands of firms adhered to the IBOR Fallbacks Protocol instead of renegotiating each bilateral agreement.

[The **ISDA Notices Hub**](https://www.isda.org/isda-solutions-infohub/isda-notices-hub/), launched on July 15, 2025, addresses a simpler failure. Some contractual notices, such as a notice of default, take effect only when delivered. Delivery used to mean couriers and fax machines, at exactly the moment when speed matters most. The Hub gives the market one place to deliver and receive them, so that "was it served, and when" has a record. One year after launch it counted 179 entities from 71 groups, including about 70% of global dealers, and legal opinions covering 33 jurisdictions, with 40 more in preparation.

Neither of these is glamorous. Both are what make the rest usable.

## IV. What Worked and What Did Not

It is easy to tell this story as a straight line. It was not.

**What worked.** The layering held. Because the original paper design already separated standard text from elections, each digital step could attach to an existing seam instead of tearing the structure down. Releasing the model as open source, under a foundation rather than an association, gave competitors a neutral place to contribute. And DRR found a sharp, recurring cost (reporting under many regimes) where shared code paid for itself quickly.

**What was slower.** Adoption of the CDM as a firm's core data model has been gradual. Most banks map to it at the edges rather than build on it. Negotiation platforms and the Clause Library have been around for years without public figures that suggest they have replaced the negotiated Word document. Legal agreements were among the last parts of the model to be covered in depth, and the Clause Library structure has only just entered it. Newer asset classes are thin: even a recent industry paper by ISDA's future leaders programme called the model's digital asset type a placeholder.

**What remains hard.** A model is only as good as the agreement behind it, and agreement is slow. Each step required lawyers, operations staff, technologists and regulators to accept the same definitions. That work does not show up in a release note. And a model can record what a contract says; it cannot settle what the contract means. When the data and the signed text disagree, the text wins, and a lawyer, not the model, decides.

## V. Lessons for Complex Programmes

The pattern is worth stating plainly, because it applies well beyond derivatives.

1. **Find the seams before building.** ISDA's paper design already separated standard text, elections and vocabulary. Digitalisation followed those seams. A programme that tries to model everything at once, without first finding where its own structure divides, will model the wrong things.
2. **Standardise before you digitalise.** The Clause Library and Create work only because the documents were standardised decades earlier: a common Master Agreement and a handful of well-known positions made it possible to name the options. The single most useful step was the least technical. Data quality starts with deciding what the options are.
3. **Versions beat supplements.** Supplements stacked on a base are a form of technical debt in prose. A document that refers to a complete text by name and version, fixed once at the point of agreement, never needs its reader to reconstruct what was in force. Released versions with a known state are easier to cite, to test and to govern.
4. **Open governance helps mutualisation.** Moving the CDM to FINOS made competing firms willing to contribute to it. A shared model owned by one party is a product; a shared model under an open licence and open governance is infrastructure. Open does not mean ungoverned: anyone may propose a change, but the maintainers still decide what is accepted and released.
5. **Agree the interpretation once.** Where many parties must apply the same rule, a single executable reading, governed openly, beats many private ones.
6. **Do not forget the plumbing.** Notices, amendments and adherence are not interesting, but without them the model has nothing to act on.
7. **Expect it to take a decade.** None of these steps was fast, and each depended on the one before it.

These lessons have obvious relevance to anyone building a new payment scheme, a market infrastructure or a public digital service. Such schemes are also defined through a rulebook, technical standards and obligations for many participants: the same kind of layered library that ISDA started from.

A new scheme also has two advantages ISDA never had. It is greenfield, and it has a single scheme owner. It does not need to extract identifiers and options from decades of signed paper; it can design them in from the first draft. It can version its rulebook and standards from the first release, instead of folding in supplements later. And it can govern its shared model the way the CDM is governed at FINOS: one model, maintained by the scheme owner, with participants proposing changes by merge request. The human gate stays where it belongs: participants propose, the scheme owner approves, and only then does the change take effect, with the accountability that a public scheme owes to its users. Whether a new scheme starts with paper and digitalises later, or starts with named choices, versioned texts and a shared model from day one, is a decision worth making deliberately.

ISDA did not set out to turn contracts into data. It set out to make a market's paperwork manageable, one step at a time. The data came as a consequence.
