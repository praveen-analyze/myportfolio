# Praveen Studio — MERN Stack Rebuild

This is the full MERN-stack version of the Praveen Studio website (originally a single static HTML file).
Same design, same copy, same pages — now built as a real React frontend + Express/MongoDB backend.

## Stack

- **Frontend:** React 18 + Vite + React Router (client/)
- **Backend:** Node.js + Express + Mongoose (server/)
- **Database:** MongoDB (local or Atlas)

## What's dynamic now

- **Contact form** → POSTs to `/api/contact` and saves every lead to MongoDB (with optional email
  notification via Nodemailer). An admin-only `GET /api/contact` endpoint lists all leads.
- **Projects/portfolio page** → fetched from `/api/projects`, filterable by category server-side.
  A seed script populates the same 6 projects from the original design.
- **Services & Pricing pages** → kept as static content (matches the original exactly) since they
  change rarely — easy to wire to the database later the same way Projects is.

## Project structure

```
praveenstudio-mern/
├── server/                  Express API
│   ├── config/db.js         MongoDB connection
│   ├── models/               Contact.js, Project.js (Mongoose schemas)
│   ├── controllers/          request handlers
│   ├── routes/                /api/contact, /api/projects
│   ├── middleware/           adminAuth, error handling
│   ├── utils/mailer.js       optional email notifications
│   ├── seed/seed.js          populates sample portfolio projects
│   └── server.js             entry point
└── client/                  React app (Vite)
    └── src/
        ├── api/api.js         axios client
        ├── components/        Navbar, Footer
        ├── pages/              Home, Projects, Services, Pricing, Contact
        └── index.css           full stylesheet (copied 1:1 from the original design)
```

## Setup

### 1. Backend

```bash
cd server
npm install
cp .env.example .env
```

Edit `.env`:
- `MONGODB_URI` — local Mongo (`mongodb://127.0.0.1:27017/praveenstudio`) or an Atlas connection string
- `ADMIN_API_KEY` — any secret string, used to protect the leads endpoint
- `EMAIL_USER` / `EMAIL_PASS` — optional, a Gmail address + [App Password](https://myaccount.google.com/apppasswords) if you want email alerts for new leads

Seed the portfolio projects, then start the server:

```bash
npm run seed   # populates MongoDB with the 6 sample projects
npm run dev    # starts on http://localhost:5000
```

### 2. Frontend

```bash
cd client
npm install
cp .env.example .env   # VITE_API_URL=http://localhost:5000/api
npm run dev             # starts on http://localhost:5173
```

Open `http://localhost:5173` — the site behaves exactly like the original, but the contact form
now writes to a real database and the projects page is served from the API.

## API reference

| Method | Route | Auth | Description |
|---|---|---|---|
| POST | `/api/contact` | public | Submit the contact form |
| GET | `/api/contact` | `x-admin-key` header | List all leads |
| PATCH | `/api/contact/:id` | `x-admin-key` header | Update a lead's status |
| GET | `/api/projects?category=ecommerce` | public | List portfolio projects |
| POST/PUT/DELETE | `/api/projects` | `x-admin-key` header | Manage portfolio projects |

## Deployment

Matches the stack mentioned in the original site's "About" section:
- **Frontend:** Vercel (`vercel --prod` from `client/`, or connect the repo)
- **Backend:** Render / Railway (point it at `server/`, set the same env vars)
- **Database:** MongoDB Atlas free tier

Remember to update `CLIENT_URL` (server) and `VITE_API_URL` (client) to your deployed URLs.
