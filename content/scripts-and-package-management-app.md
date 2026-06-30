## Year

2023 - 2026

## Project description

A cloud-based platform built with Vue.js and the Quasar framework that enables AEC (architecture, engineering, and construction) teams to deploy, document, and govern their Dynamo and Grasshopper automation scripts across their organization.

### Key features

- **Version & package management** — pin exact package versions to workspaces so scripts run against consistent dependencies, regardless of a user's local environment
- **Run Inspector & version history** — trace execution history and inspect changes over time, giving teams full audit visibility into how scripts evolve
- **Block-based Wiki editor** — Notion/GitBook-style documentation editor for authoring structured docs per script, directly within the platform
- **Organization management console** — admin interface for users, roles, groups, and workspace permissions, with CSV bulk import and Azure AD group sync
- **QuickAccess customization** — drag-and-drop layout editor for a user's most-used scripts, synced live with the Revit ribbon
- **Usage analytics dashboards** — visual reporting on run success rates, adoption trends, and script health across the organization

### Technical highlights

- Architected and built the entire frontend solo with Vue.js and Quasar, from initial data models through to production release
- Built a custom block-based document editor on top of Editor.js to power the Wiki documentation feature
- Designed a custom drag-and-drop engine for the QuickAccess panel, supporting nested groups and live sync with the Revit ribbon
- Built 7 D3.js visualizations for the analytics dashboards, each with its own data shape and rendering logic
- Implemented authentication via Microsoft SSO and email/password, with JWT-based session handling
- Optimized data fetching with on-demand loading and caching strategies to keep the UI responsive under large data volumes

## My role

Sole developer on the project. I was responsible for architecture, frontend implementation, and ongoing feature delivery across the full platform, from the initial build through to client-driven feature work over multiple years.

## Client feedback

> Natalia and her team are absolutely great to work with.
> They feel like part of your team, do great work, with great comunication and positive energy. I wholeheartedly recommend working with them, and intend to keep doing so myself :)
