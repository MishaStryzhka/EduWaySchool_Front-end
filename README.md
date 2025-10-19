# EduWaySchool Front-end

EduWay School is an online learning platform that brings together curated courses, adaptive
practice, and collaborative cohorts. This repository now uses
[Next.js](https://nextjs.org/) with [React](https://react.dev/) and
[TypeScript](https://www.typescriptlang.org/) to deliver a scalable foundation for the web
experience.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- [npm](https://www.npmjs.com/) 9 or later (bundled with Node.js)

### Installation

```bash
npm install
```

### Available scripts

- `npm run dev` – start the Next.js development server with hot reloading.
- `npm run build` – generate an optimized production build of the application.
- `npm run start` – serve the previously generated production build.
- `npm run lint` – run ESLint with the recommended Next.js rules.
- `npm run format` – format the codebase using Prettier.

## Project structure

```
├── app/                 # App Router pages, layouts, and global styles
│   ├── layout.tsx       # Root layout shared across all routes
│   ├── page.tsx         # Landing page for the EduWay learning platform
│   └── globals.css      # Global styles imported by the root layout
├── public/              # Static assets served as-is
│   └── eduway-logo.svg  # EduWay brand mark used in the UI
├── next.config.mjs      # Next.js configuration
├── next-env.d.ts        # TypeScript definitions for Next.js features
├── package.json         # Dependencies and development scripts
└── tsconfig.json        # TypeScript configuration tuned for Next.js
```

## Next steps

- Flesh out course catalog pages, enrollment flows, and dashboard experiences.
- Integrate data fetching (REST, GraphQL, or tRPC) backed by the EduWay API.
- Add automated tests (unit, integration, and end-to-end) to safeguard future changes.
