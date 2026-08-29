# MediConnect

A frontend-only prototype of a home-visit doctor consultation platform, built for an IPC class project.

## Live Demo
🔗 [View Live Site](#) <!-- add your live link here after Part 3 -->

## Features
- Patient registration/login (email or phone) and self-booking of home-visit appointments
- Doctor discovery with ratings, hospital affiliation, and NMC verification numbers
- Appointment lifecycle: booking → doctor accept/reject → consultation notes → digital prescription
- Payment flow supporting Card, eSewa, and Khalti (simulated, prototype only)
- Admin dashboard for managing patients, doctors, appointments, and a medicine catalogue
- Fully responsive design with a mobile sidebar

## Tech Stack
Plain HTML, CSS, and JavaScript — no frameworks, no backend. Data is stored in the browser's `localStorage`, simulating a real database and API layer through a `MediConnectDB` object in `js/data.js`.

## How to Run Locally
1. Clone or download this repository
2. Open `index.html` in any modern browser (Chrome recommended)
3. No installation or server required — an internet connection is only needed to load icon/font assets

## Demo Logins
| Role    | Email / Phone                | Password     |
|---------|-------------------------------|--------------|
| Patient | sita@example.com / 9841000001 | patient123   |
| Doctor  | ramesh@mediconnect.com / 9851000001 | doctor123 |
| Admin   | admin@mediconnect.com         | admin123     |

To reset all demo data to its original state, open `pages/test-data.html` and click **Reset Demo Data**.

## Project Structure