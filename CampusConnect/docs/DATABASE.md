# Database Design

Prisma schema is authoritative: `server/prisma/schema.prisma`.

## Core entities
| Entity | Purpose | Key relationships |
|---|---|---|
| User | Identity, role, status, password hash | owns registrations and memberships; may manage clubs |
| StudentProfile | Student number, department, batch | one-to-one with User |
| Club | Club metadata and advisor | has executives, members and events |
| ClubMember | Membership request/status | links User and Club; unique user/club pair |
| EventCategory | Event classification | has events |
| Event | Schedule, venue, capacity, approval status | belongs to Club; has registrations |
| Registration | Student's event registration and QR token | unique event/user pair |
| Attendance | Attendance result and method | one per registration |
| Certificate | Unique certificate code | one per eligible registration |
| Announcement | Club/event communication | author, optional club/event |
| Notification | In-app notice | belongs to User |
| Feedback | Optional event rating/comments | one feedback per user/event |
| ApprovalLog | Decision, note, actor and timestamp | belongs to Event and User |

## Integrity rules
- Email is unique and normalized to lowercase in application code.
- One registration per user/event is enforced by a unique constraint. Cancelled registrations can be reactivated only through explicit application logic.
- One attendance record per registration and unique certificate code.
- Event capacity and deadline are checked by the API; concurrent high-load deployments should use transaction/locking strategy and test race conditions.
- Membership is unique per user/club.
- Avoid deleting history-bearing records; archive or deactivate instead.
