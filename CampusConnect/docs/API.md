# REST API Reference

Base URL: `http://localhost:4000/api` in local development. Production must use HTTPS. JSON requests use `Content-Type: application/json`. Protected requests require `Authorization: Bearer <JWT>`. Errors use `{ "error": "..." }`.

## Authentication
| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/auth/register` | Public | Create student account |
| POST | `/auth/login` | Public | Login and receive JWT |
| GET | `/auth/me` | Any signed-in user | Current account |

## Events and registration
| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/events` | Public | List published events; optional `q`, `categoryId`, `clubId` filters |
| GET | `/events/:id` | Public | Event details |
| POST | `/events` | Executive/Admin | Create draft event for authorized club |
| PATCH | `/events/:id` | Event owner/Admin | Edit permitted draft/event fields |
| POST | `/events/:id/submit` | Event owner/Admin | Submit draft for review |
| POST | `/events/:id/decision` | Advisor/Admin | Approve, reject or request changes |
| POST | `/events/:id/publish` | Event owner/Admin | Publish approved event |
| POST | `/events/:id/cancel` | Event owner/Admin | Cancel event |
| POST | `/events/:id/registrations` | Student | Register; returns QR token |
| GET | `/me/registrations` | Student | Own registrations |
| DELETE | `/events/:id/registrations/me` | Student | Cancel own registration if permitted |

## Clubs and membership
| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/clubs` | Public | List active clubs |
| GET | `/clubs/:id` | Public | Club details |
| POST | `/clubs/:id/membership-requests` | Student | Request membership |
| GET | `/clubs/:id/membership-requests` | Assigned executive/Advisor/Admin | Review queue |
| PATCH | `/clubs/membership-requests/:id` | Assigned executive/Admin | Approve/reject request |
| POST | `/clubs/:id/announcements` | Assigned executive/Admin | Publish announcement |

## Attendance, certificates and reports
| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/events/:id/attendance` | Assigned executive/Admin | Mark attendance by QR token or registration ID |
| GET | `/events/:id/attendees` | Event owner/Advisor/Admin | Participant list |
| POST | `/events/:id/certificates` | Assigned executive/Admin | Generate certificates for attendees |
| GET | `/me/certificates` | Student | Own certificate metadata |
| GET | `/certificates/:id/download` | Certificate owner or Admin | Download PDF |
| GET | `/reports/summary` | Advisor/Admin/Executive | Scoped totals |
| GET | `/health` | Public | Liveness check |

## Example login
```json
{ "email": "student@campusconnect.local", "password": "CampusConnect123!" }
```
Response includes `token` and safe `user` fields. Never share JWTs or commit them to Git.
