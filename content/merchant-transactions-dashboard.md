## Year

2026

## Project description

A merchant dashboard for managing transactions, billing, and API keys, with separate user-facing and admin-facing views. Built solo with React, TypeScript, and Vite, using Chakra UI for components, TanStack Query for data fetching, Zustand for state management, and React Hook Form with Zod for validation. The admin side handles over 10,000 transactions, with architecture structured around Evolution Design principles for maintainability and scalability.

### Key features

- **Transaction management** — paginated, searchable transaction tables with filtering by currency, terminal, date range (calendar picker), and status
- **Transaction details drawer** — clicking any row opens a detail drawer with full transaction information, without leaving the table view
- **Admin controls** — admins can delete or retry transactions directly from the dashboard
- **Cascading terminal redirection rules** — admins can create and edit redirection rules through a form, choosing between simple redirection (direct terminal-to-terminal mapping) or custom redirection based on configurable ranges for terminal capacity and transaction amount
- **Merchant management (admin)** — dedicated admin pages for adding and managing merchant users
- **API key management** — users can view and manage their own API keys from the dashboard
- **Billing overview** — dedicated billing section for tracking usage and charges
- **Account management** — users can update their first and last name, view their unchangeable username, change their email (with password confirmation), change their password (old password, new password, repeat), and sign out
- **Role-based views** — users have read-only access to transactions, while admins have full control over deletion, retries, merchant management, and redirection rules

### Technical highlights

- Structured the application architecture around Evolution Design principles, keeping the codebase maintainable and scalable as features grew across user and admin sides
- Built a dynamic rule-builder form for cascading terminal redirections, supporting two distinct modes (simple terminal mapping vs. range-based rules for capacity and transaction amount) within a single schema-validated form
- Built server-side paginated, filterable transaction tables handling 10,000+ records on the admin side, using TanStack Query for caching and request deduplication
- Implemented a date-range calendar filter with react-day-picker, integrated directly into the transaction query pipeline
- Built reusable drawer components for transaction details, decoupled from table row state
- Used Zustand for global client state (filters, session/role) alongside TanStack Query for server state, keeping the two concerns cleanly separated
- Built separate sensitive-action forms (email change, password change) requiring current-password confirmation, each with its own Zod schema for validation (e.g. matching new/repeat password fields)
- Form validation across redirection rules, API key, account, and merchant management flows using React Hook Form + Zod schemas, with conditional schema logic to handle the two redirection modes
- Used Chakra UI's charting components for billing/usage visualizations
- Client-side routing handled with react-router-dom across distinct user and admin route trees

## My role

Sole developer responsible for the full build: architecture, frontend implementation, and both the user-facing and admin-facing sides of the dashboard.
