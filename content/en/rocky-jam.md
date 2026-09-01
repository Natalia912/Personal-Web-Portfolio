## Year

2025 - 2026

## Project description

Rocky Jam is an app for musicians to create, edit, and play back musical compositions. Built with Vue 3, TypeScript, and Quasar, with Pinia for state management and TanStack Query for data fetching. The app includes simple username/password authentication with JWT, a composition gallery, a structured composition editor, and a playback engine with metronome sync. A lightweight FastAPI + PostgreSQL backend handles composition persistence, built by me and later reviewed and refined by a backend developer.

### Key features

- **Composition gallery** — a main view listing all available compositions, each of which can be opened for editing
- **Composition editor** — compositions are built from sections, each represented as a box; within a section, users add chords via a popup form specifying chord name and duration, alongside section-level settings like time signature, duration, section name, and repeat count
- **Playback with metronome** — compositions can be played back with a synced metronome; each chord is visualized as a block that moves from right to left as playback progresses
- **Playback controls** — users can stop and resume playback at any point, and adjust the metronome BPM during playback
- **Authentication** — simple username/password login secured with JWT tokens

### Technical highlights

- Built the composition editor's structured data model (sections containing chords, each with duration, signature, and repeat metadata) and the corresponding UI for editing it
- Implemented the popup-based chord creation/editing flow
- Extended an existing playback engine (originally built by another developer on the team), adding features on top of it over time
- Used Pinia for composition/editor state and TanStack Query for server-state synchronization with the backend
- Built a FastAPI + PostgreSQL backend for composition CRUD (create, edit, delete), later reviewed and improved in collaboration with a backend developer
- Implemented JWT-based authentication flow on both frontend and backend

## My role

Primary developer on the frontend. I built the composition gallery, editor, and authentication flow, and extended the playback engine with additional features over time. Also built the initial backend in FastAPI and PostgreSQL, later reviewed and improved by a backend developer.
