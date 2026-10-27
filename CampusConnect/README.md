# CampusConnect
### University Club, Event & Activity Management Platform

A course-project implementation based on the supplied CampusConnect SRS and Final Diagrams. It provides a React/TypeScript web client, Express REST API, PostgreSQL persistence via Prisma, JWT authentication, role-based access control, event approval, event registration, club membership, attendance, announcements, reports and PDF certificates.

> **Project status:** runnable course-demo baseline with the core workflows implemented. Email delivery and QR camera scanning are optional integrations and are not configured by default. Review the limitations in `docs/IMPLEMENTATION_STATUS.md` before claiming production readiness.

## Technology stack
- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js, Express, TypeScript
- Database: PostgreSQL 16, Prisma ORM
- Authentication: JWT and bcrypt password hashing
- Validation: Zod
- QR tokens: `qrcode`
- Certificates: PDFKit
- Tests: Vitest + Supertest

## Quick start (local)
Requirements: Node.js 20+, npm 10+, Docker Desktop (or local PostgreSQL).

1. Clone/download this repository.
2. Copy `.env.example` to `.env`; for local demo, the default database credentials match `docker-compose.yml`. Change `JWT_SECRET` to a random secret.
3. Start the database: `docker compose up -d postgres`
4. Install dependencies: `npm install`
5. Generate Prisma client: `npm run db:generate`
6. Apply schema: `npm run db:migrate`
7. Insert demo data: `npm run db:seed`
8. Start API and web client: `npm run dev`
9. Open `http://localhost:5173`; API health check: `http://localhost:4000/api/health`.

If Prisma asks for a migration name on first setup, use `npm run db:migrate -- --name init`. The seed script is safe to rerun for the demo accounts and sample records.

## Demo accounts
All demo accounts use password `CampusConnect123!` after seeding. **Demo credentials must never be used in a real deployment.**

| Role | Email | Password |
|---|---|---|
| Administrator | `admin@campusconnect.local` | `CampusConnect123!` |
| Faculty Advisor | `advisor@campusconnect.local` | `CampusConnect123!` |
| Club Executive | `executive@campusconnect.local` | `CampusConnect123!` |
| Student | `student@campusconnect.local` | `CampusConnect123!` |

## Repository layout
```text
CampusConnect/
├── client/                 # React + TypeScript UI
│   ├── src/
│   │   ├── components/     # Shared layout and UI components
│   │   ├── lib/            # API client and auth storage
│   │   ├── pages/          # Login, dashboard, events, clubs, approvals
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
├── server/                 # Express REST API
│   ├── prisma/
│   │   ├── schema.prisma   # Relational data model
│   │   └── seed.ts         # Demo data
│   ├── src/
│   │   ├── middleware/     # Authentication, error handling
│   │   ├── routes/         # API endpoints by domain
│   │   ├── services/       # Certificate generation
│   │   ├── app.ts
│   │   └── index.ts
│   ├── tests/
│   ├── package.json
│   └── tsconfig.json
├── docs/                   # User, developer, API, security and test docs
├── .env.example
├── docker-compose.yml
└── README.md
```

## Documentation
- `docs/PROJECT_DOCUMENTATION.pdf` — formatted report with cover page, architecture, requirements mapping, setup and test plan.
- `docs/ARCHITECTURE.md` — component structure and architecture decisions.
- `docs/API.md` — endpoint reference and access rules.
- `docs/DATABASE.md` — entities and integrity rules.
- `docs/TESTING.md` — test plan and acceptance criteria.
- `docs/SECURITY.md` — security assumptions and deployment checklist.
- `docs/IMPLEMENTATION_STATUS.md` — what is implemented versus optional/not configured.

## Main API routes
See `docs/API.md`. All protected routes require `Authorization: Bearer <token>`. Health endpoint is public.

## GitHub upload
Create a repository on GitHub, then from this project directory run:
```bash
git init
git add .
git commit -m "Initial CampusConnect implementation"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
Do not upload `.env`, database dumps, access tokens, or real student data. `.gitignore` excludes `.env`.

## Important
This repository is a runnable academic project baseline, not a guarantee of production-grade completeness. Configure secrets, HTTPS, database backups, email provider and deployment environment before public use. Validate requirements with the course teacher.
