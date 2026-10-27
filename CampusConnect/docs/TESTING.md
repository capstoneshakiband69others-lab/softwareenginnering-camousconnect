# Testing Plan and Acceptance Criteria

Run `npm test` from the repository root after installing dependencies and configuring the test database. `npm run build` checks TypeScript and client production builds.

| ID | Scenario | Expected result |
|---|---|---|
| TC-01 | Register with valid details | Account created; duplicate email rejected |
| TC-02 | Login with invalid credentials | Safe authentication error |
| TC-03 | Student accesses admin-only operation | 403/401; no protected data disclosed |
| TC-04 | Register for published open event | One registration and QR token created |
| TC-05 | Register twice for same event | Duplicate registration rejected |
| TC-06 | Register for full/closed event | Request rejected with explanation |
| TC-07 | Executive edits another club's event | Request denied |
| TC-08 | Advisor approves submitted event | Status and approval log recorded |
| TC-09 | Mark attendance with valid token | Attendance recorded once |
| TC-10 | Reuse token or mark attendance twice | Duplicate rejected |
| TC-11 | Download own eligible certificate | PDF delivered; unrelated user denied |
| TC-12 | Mobile viewport | Main pages remain usable without horizontal overflow |
| TC-13 | Invalid event dates/capacity | Validation error |
| TC-14 | Unrelated user requests club report | Access denied or results scoped |
| TC-15 | Restart app and reload data | Committed data persists |

## Acceptance checklist
- Student flow: browse events → register → see own registration.
- Organizer flow: create draft → submit → advisor/admin decision → publish → manage attendance.
- Membership flow: request → executive decision → status updated.
- Role and resource checks are enforced by the API, not just the UI.
- Certificates are restricted to eligible attendees and protected on download.
- README documents setup, environment variables, database, seed data and tests.

Record actual results, evidence, pass/fail and defect IDs during execution. Do not mark tests passed without running them.
