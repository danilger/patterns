# Inline comments on PR/MR

Rule for agents: after opening or updating a pull/merge request,
both a **PR/MR overview comment** and **inline review comments on the
diff** are required.

## Hard requirement

When you open or update a PR/MR on any Git host that supports line comments
on the diff (GitHub, GitLab, Forgejo, Gitea, Bitbucket, …):

1. Publish or update the **PR/MR overview** (PR/MR description / body,
   not a comment in the issue tracker):
   - a short description of the change (what and why);
   - a recommendation for **in which order** to review the changed
     files (numbered list of paths + one phrase why that order).
2. Leave **inline review comments on changed lines** of that PR/MR.
3. Inline means **provider comments on the diff** (review API /
   `gh` / `glab` / forge API) — **not** comments in source files
   (`//`, `#`, `/* */`, …) and **not** a substitute for the PR/MR
   overview or an issue-tracker comment.
4. **You choose** which points are key for inline. Prefer
   high-value explanations (intent, non-obvious trade-offs,
   risks, contracts, edge cases). Skip trivial churn
   (rename-only, formatting, boilerplate).
5. A PR/MR without an overview (description + review order) or without
   inline comments is an **incomplete handoff**. Do not treat the work
   as done until they are published, or until you have confirmed that
   the host has no line comments / auth blocks them — then say so
   explicitly in the task comment; do not replace inline comments with
   comments in the code.

If the provider does not support line comments on the diff at all — say
so once and use the nearest supported review mechanism
(e.g. a file-level note). Never replace that with comments in
source files. The overview with description and review order is still
required.

## Overview — what to write

- **Description:** 2–5 sentences: goal of the change, boundaries (what was
  not touched), how to verify.
- **Review order:** numbered list of only meaningful changed
  files (related ones may be grouped). Order — from contracts /
  model / core toward UI, tests, and cosmetics (or another sensible flow for
  this PR). Each item — one short reason.
- Do not dump the whole diff or list trivial churn unless needed.

Example shape:

```markdown
## Summary
…

## Suggested review order
1. `path/a.ts` — …
2. `path/b.tsx` — …
3. …
```

## Inline — what to write

- Explain **why** this hunk matters to the reviewer, do not restate the diff.
- Keep each comment short and anchored to the target lines.
- Prefer a small set of precise comments over spam; quality over
  quantity.
