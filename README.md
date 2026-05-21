# AI Engineer Roadmap

A 100% local, offline-first progress tracker for going from front-end dev to
trainee/junior **AI Application Engineer** (LLM apps: prompting, RAG, agents,
tool use, evals — not ML research). ~415h of curriculum across 6 phases, 22
modules, 141 tasks.

No backend, no auth, no network calls except to load resource links you click.
Progress lives entirely in your browser's IndexedDB.

## Run it

```bash
pnpm install   # or npm install
pnpm dev       # or npm run dev
```

Open the printed URL. First load only needs network; afterwards it works
offline.

```bash
pnpm build     # type-check + production build
pnpm preview   # serve the production build
```

## How it works

- **Content** (`src/data/roadmap.ts`) — static, bundled TS. Edit freely.
- **Progress** (IndexedDB, store `progress`) — `{ taskId, completed,
  completedAt, startedAt }` per task. Toggling a checkbox writes immediately.
- **UI state** (IndexedDB, store `ui`) — collapse state per phase/module,
  filter, hide-completed, dark mode. Persists across reloads.

Content and progress are fully separate, so editing `roadmap.ts` never wipes
your checkboxes. Task IDs are the join key — **never change an existing id**
after you've checked it off.

### Export / Import / Reset

Top-right toolbar. Export downloads a JSON file shaped like:

```json
{ "version": 1, "exportedAt": 1716240000000, "progress": [ ... ] }
```

Import replaces all progress with the file's entries (confirms first). Reset
wipes the `progress` store (confirms first); UI state is untouched.

## Data model

See `src/types.ts`. The shape of one task:

```ts
{
  id: 'p1-m2-streaming',          // stable kebab-case, IDB primary key
  title: 'Stream a chat response',
  type: 'practice',               // 'practice' | 'theory'
  estimatedHours: 2,
  description: '...markdown...',
  deliverable: 'optional, for practice tasks',
  resources: [
    { label: 'Vercel AI SDK — streaming',
      url: 'https://ai-sdk.dev/docs/...',
      kind: 'docs' },              // docs|video|course|article|tool|repo
  ],
}
```

Modules group tasks; phases group modules. Every level rolls up
completed/total hours and a progress %.

## Editing the roadmap

1. Open `src/data/roadmap.ts`.
2. Add/edit a task inside the right `Module.tasks` array. Keep `estimatedHours`
   in 1–4h chunks. Aim for ~80% practice / 20% theory across the curriculum.
3. Give each new task a unique `id` (convention: `pN-mN-shortslug`). Once
   shipped, treat the id as immutable.
4. Resources: 2–4 per task, real URLs, correct `kind`. The badge color is
   driven by `kind`.
5. Save — Vite HMR picks it up. Existing progress survives.

To add a whole new module, append a `Module` to the right `Phase.modules`. To
add a new phase, append a `Phase` with the next `order` value.

## Project layout

```
src/
  App.tsx                 layout, header, sidebar
  main.tsx                React entry
  index.css               Tailwind + .md prose styles
  types.ts                Phase / Module / Task / Progress / UIState
  data/roadmap.ts         curriculum content (edit me)
  db/db.ts                IndexedDB wrapper (idb), export/import helpers
  hooks/
    useProgress.ts        progress state + IDB sync
    useUIState.ts         collapse/filter/dark state + IDB sync
  lib/progress.ts         stats rollups, flatten, next-up
  components/
    PhaseSection.tsx      collapsible phase
    ModuleSection.tsx     collapsible module
    TaskCard.tsx          checkbox + markdown body + resources
    ProgressBar.tsx
    ResourceLink.tsx      kind-colored link chip
    Toolbar.tsx           export / import / reset / dark toggle
    FiltersBar.tsx        practice/theory/all + hide completed
    UpNextPanel.tsx       next 3–5 incomplete tasks
```

## Tech

React 19 + Vite + TypeScript, Tailwind v4 (`@tailwindcss/vite`), `idb` for the
IndexedDB wrapper, `react-markdown` for task bodies. No router, no state
manager, no backend.

## Assumptions

- A single user on a single browser. No multi-device sync — use Export/Import
  if you switch machines.
- Resource URLs were correct at content time. If one rots, edit
  `roadmap.ts`; nothing else depends on them.
- "Done" is on the honor system — a checkbox, not a grader. The `deliverable`
  field is what you should be able to produce/demo for each practice task.
- The first incomplete N tasks (depth-first by phase → module → task order)
  are surfaced as "Up next." Order in `roadmap.ts` is the recommended path.
