---
title: "Do AI Test Agents Belong in CI Pipelines? An Honest Take"
date: "2025-12-19"
summary: "Why agents like Planner/Generator are instruction-driven, and when CI integration actually makes sense."
---

I see many teams rushing to plug AI Test Agents directly into CI/CD and expecting magic.

**The core truth:** most agents are instruction-driven. They generate or update specs when guided — not continuously.

So the real question becomes:

- If that's the case, why put them in CI at all?
- Why not run them locally → review → commit → let CI run deterministic tests?

In many teams, **local usage is enough**.

CI integration starts making sense when you need **scale, consistency, governance, or controlled workflows** across multiple repos and teams.
