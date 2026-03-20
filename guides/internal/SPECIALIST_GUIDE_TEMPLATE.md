# Specialist Guide Template (Video-first Academy)

Purpose: training pages for operators in hospitality, centered on video lessons.

## Core principles
- Primary medium is video (YouTube).
- Text exists only to support execution.
- Keep copy short, direct, and operational.
- No marketing blocks inside lesson content.
- Public copy in Greek only.

## Required page types
1. Academy Hub (`/guides/`)
2. Lesson Player (`/guides/<lesson-slug>/`)

## Academy Hub structure
- Course header with short purpose and progress.
- Module list with lessons.
- Each lesson row includes:
  - title
  - duration
  - state (`Νέο`, `Σε εξέλιξη`, `Ολοκληρώθηκε`, `Σύντομα`)
  - action button (`Παρακολούθηση` or `Σύντομα`)
- Search input for quick lesson filtering.

## Lesson Player structure
- Top utility bar (back, lesson title, next/prev state).
- Left sidebar with module/lesson tree.
- Main player section:
  - large video area
  - `Τι θα μάθεις σε 30''`
  - short prerequisite note
  - 3-5 completion checks
  - 1 short troubleshooting box
  - completion action

## Content block limits (lesson page)
- Summary: max 1-2 lines.
- Prerequisites: max 1 line.
- Completion checks: max 5.
- Troubleshooting: max 3 short bullets.

## Progress behavior
- Use localStorage for:
  - started lessons
  - completed lessons
  - checklist states per lesson
- Continue CTA returns user to last started lesson.

## Video URL policy
- Each lesson has one canonical YouTube URL.
- Accept `youtube.com/watch?v=` and `youtu.be/`.
- Convert to embed URL in player.
- If no URL exists yet, show placeholder and keep lesson marked `Σύντομα`.

## Language policy
- Monotonic Greek consistently.
- Keep preferred terms when relevant:
  - `παραγγελιοληψία`
  - `ασύρματη`
  - `σερβιτόρος`

