# GEMINI.md - Project Instructions

This project is a Next.js web application located in the `my-app` directory.

## Project Overview

- **Purpose:** A modern, full-stack web application.
- **Main Technologies:**
  - **Framework:** [Next.js](https://nextjs.org) (v16.2.6 - App Router)
  - **Library:** [React](https://react.dev) (v19.2.4)
  - **Styling:** [Tailwind CSS](https://tailwindcss.com) (v4)
  - **Language:** [TypeScript](https://www.typescriptlang.org) (v5)
- **Architecture:** Follows the Next.js App Router pattern with the source code primarily in `my-app/app/`.

## Important Note for AI Agents

> [!CAUTION]
> This project uses a non-standard or future version of Next.js (**v16.2.6**).
> APIs, conventions, and file structure may differ from standard training data.
> - **Docs:** Refer to `my-app/node_modules/next/dist/docs/` for specific guidance.
> - **Navigation:** For fast client-side navigations, `Suspense` alone might not be enough; you may need to export `unstable_instant` from the route. See `docs/01-app/02-guides/instant-navigation.mdx`.

## Building and Running

Key commands for development and deployment:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code quality checks.

*Note: These commands should be run within the `my-app` directory.*

## Development Conventions

- **Fonts:** Uses `Geist` and `Geist Mono` fonts via `next/font/google`.
- **Linting:** Uses ESLint 9 with `eslint-config-next`. Configuration is in `my-app/eslint.config.mjs`.
- **Styling:** Tailwind CSS 4 is used for styling. Configuration is managed via `@tailwindcss/postcss`.
- **Type Safety:** TypeScript is used across the project with configuration in `my-app/tsconfig.json`.

## Key Files

- `my-app/app/layout.tsx`: Root layout defining the global HTML structure and fonts.
- `my-app/app/page.tsx`: The main entry page of the application.
- `my-app/next.config.ts`: Next.js specific configuration.
- `my-app/package.json`: Project dependencies and scripts.
- `my-app/AGENTS.md`: Specific warnings and rules for AI agents.
