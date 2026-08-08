# PM3 Decision Dataset — Schema v0.1

**Purpose:** Accumulate evidence from live execution so PM3 Intelligence Atlas™ evolves from observed decisions rather than architecture alone.

## Required Fields

| Field | Definition |
|---|---|
| Decision ID | Unique identifier, recommended format `PM3-D-0001` |
| Date | Date the decision was made or formally logged |
| Project | Originating workflow, e.g. Call Trap™, Diagnostic |
| Decision | Concise statement of what was decided |
| Intended Outcome | Observable definition of success |
| Consequence Level | C0 Routine / C1 Material / C2 High / C3 Critical-Irreversible |
| Intelligences Invoked | Modules actually used, not modules theoretically available |
| Evidence Used | Sources, observations, records, calculations, or other evidence |
| Assumptions / Unknowns | Material facts not verified at decision time |
| Human Authority | Human accountable for the final decision |
| Action Taken | What was actually executed |
| Outcome | Observable result; leave Pending until known |
| Outcome Date | Date outcome became observable |
| Error or Gap | What the process missed, misunderstood, or over-processed |
| Revision | What should change in the next comparable decision |
| Canonical Lesson | Reusable learning only after human approval |
| Status | Open / Pending Outcome / Closed / Invalidated |

## Logging Rules

1. Log the decision close to decision time; do not reconstruct only successful cases later.
2. Record the modules actually invoked.
3. Preserve assumptions and unknowns instead of rewriting them after the outcome is known.
4. A negative outcome is valuable evidence and must not be deleted because it weakens the framework.
5. Record unnecessary friction as an error/gap when the architecture adds work without improving the decision.
6. Do not promote a lesson to canonical status until outcome evidence supports it and a human approves it.
7. Keep sensitive client, employment, legal, financial, and personal information restricted or anonymized where appropriate.

## 50-Decision Gate

At decision 50, perform the first formal evidence review:
- outcome coverage,
- module frequency,
- module combinations,
- consequence distribution,
- revision count,
- failure patterns,
- unnecessary-friction cases,
- and evidence of measurable decision improvement.

Until this gate is met, the Dataset and PIAS-000 remain research artifacts rather than proof of a validated universal architecture.
