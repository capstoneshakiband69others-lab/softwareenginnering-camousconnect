# Security Notes and Deployment Checklist

## Implemented controls
- bcrypt password hashing; no plaintext password storage.
- JWT signature and expiry validation.
- Server-side role checks and club/event ownership checks on protected operations.
- Zod request validation and centralized safe error responses.
- Prisma parameterized database operations.
- CORS restricted to configured client origin.
- `.env` excluded from version control.
- Registration, attendance and certificate uniqueness constraints.

## Before public deployment
- Generate a unique `JWT_SECRET` (at least 32 random characters) and keep it in the hosting provider's secret manager.
- Set `NODE_ENV=production`, configure HTTPS, secure headers/rate limiting, and a strict CORS origin.
- Replace demo accounts/passwords and disable public admin registration.
- Configure database backups, restore drills, monitoring, log retention and access review.
- Configure and test email delivery if notifications are enabled.
- Review privacy/retention policies with the university before using real student records.
- Run dependency and security scans; add rate limits and refresh/revocation strategy as deployment requirements demand.
- Test concurrent registration at capacity and ensure transactional seat allocation under expected load.

## Threats to consider
Credential stuffing, stolen bearer tokens, IDOR/resource-scope mistakes, QR token copying, duplicate requests, database exposure, leaked environment variables, and denial of service. QR attendance currently relies on token validation and duplicate-record rejection; a camera scanning UI and stronger anti-replay policy may need integration for production.
