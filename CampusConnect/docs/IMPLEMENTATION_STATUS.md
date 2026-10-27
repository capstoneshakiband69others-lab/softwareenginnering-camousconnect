# Implementation Status and Scope

This repository implements the primary course-demo flows from the provided SRS. The SRS itself describes several items as “Should” or “Could”; they are not all guaranteed in the baseline.

## Included in this repository
- Student account registration and login, JWT auth, bcrypt hashes and role middleware.
- Clubs and event listing/detail pages.
- Event draft creation, submission, advisor/admin decision and publishing.
- Event registration with server-side deadline/capacity/duplicate checks and QR token generation.
- Club membership request and executive decision.
- Attendance recording, attendee list and PDF certificate generation for eligible attendees.
- Announcements and scoped summary reports.
- PostgreSQL Prisma schema and demo seed data.
- API, setup, architecture, security and test documentation.

## Not configured / production caveats
- External email provider credentials and delivery/retry queue.
- In-browser QR camera scanner (attendance endpoint supports token entry).
- Production deployment provider, domain, TLS certificate and production database.
- Formal accessibility audit, load testing, security penetration test and backup restore drill.
- Full audit UI, advanced analytics/CSV export, account recovery workflow and optional feedback UI.
- University SSO/SIS integration, mobile native apps, payments, biometrics and location tracking remain out of scope as specified by the SRS.

No software project can honestly be guaranteed “100% complete” without installing dependencies, configuring its environment, executing tests, and validating it with the instructor. This status file distinguishes implemented features from deployment-specific work.
