# Sukruti Mallesh — Portfolio

A modern, recruiter-facing portfolio showcasing my work in software engineering, AI integrations, and full-stack development.

**Live site (GitHub Pages):** https://sukrutimallesh.github.io/sukruti-portfolio/
**Vercel deployment:** Coming soon

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, Framer Motion |
| Styling | CSS Modules, custom design system |
| Backend | FastAPI (Python) |
| Deployment | GitHub Pages (current), Vercel (configured) |

---

## Featured Projects

### 1. E2E Testing Automation Tool — PayPal
Internal enterprise tool. Built an intelligent end-to-end test automation platform at PayPal using AI (GitHub Copilot + MCP) to auto-generate test scripts from natural language descriptions. Reduced test suite runtime by 40%.
- GitHub: Internal/confidential — available upon request

### 2. Snappy — Real-Time Chat App
Full-stack real-time messaging app with Supabase Realtime, JWT auth, custom SVG avatars, and emoji support.
- GitHub: https://github.com/sukrutimallesh/Chat_app
- Live: https://snappy-chat-sukruti.vercel.app

### 3. Yelp Clone
Restaurant discovery and review platform on the PERN stack. Ingested 500K+ Yelp Open Dataset records into PostgreSQL with optimized JOIN queries for aggregate ratings.
- GitHub: https://github.com/sukrutimallesh/Yelp_Clone
- Live: https://yelp-clone-sukruti.vercel.app

### 4. Reddit Clone
RESTful API backend with JWT authentication, email verification, subreddits, threaded comments, and voting. Built with Spring Boot 3, Spring Security, and PostgreSQL. API documented via Swagger UI.
- GitHub: https://github.com/sukrutimallesh/Reddit-Clone
- Live (Swagger UI): https://reddit-clone-api.onrender.com/swagger-ui.html

---

## About the Projects

**E2E Testing Automation Tool** — Built at PayPal, this platform connects GitHub Copilot to a Spring Boot MCP backend to auto-generate E2E test scripts from natural language. File chunking ensures compatibility with Copilot's context window, while Docker containerization enables auto-reload and CI/CD integration. Reduced test suite runtime by 40%.

**Snappy** — A real-time chat application originally built on the MERN stack (MongoDB, Express, React, Node.js, Socket.io) and later migrated to Supabase for a serverless architecture with Supabase Realtime. Features JWT authentication, custom SVG avatar selection, and emoji support.

**Yelp Clone** — PERN stack (PostgreSQL, Express, React, Node.js) restaurant review platform. Parsed and ingested 500,000+ highly nested records from the Yelp Open Dataset. Optimized queries with efficient JOIN operations for computed aggregate ratings.

**Reddit Clone** — A Spring Boot 3 REST API implementing the full Reddit feature set: subreddits, posts, threaded comments, upvotes/downvotes, email verification, and JWT-based authentication. Full API docs exposed via Swagger UI on Render.

---

## Project Structure

```
sukruti-portfolio/
├── backend/                   # FastAPI backend (MVC pattern)
│   ├── app/
│   │   ├── config/            # Application settings
│   │   ├── controllers/       # API route handlers
│   │   ├── models/            # Pydantic data models
│   │   └── services/          # Business logic / data layer
│   ├── requirements.txt
│   └── .env (optional)
├── frontend/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/        # UI components (section-based)
│   │   ├── data/              # portfolio.json — single source of truth
│   │   ├── hooks/             # Custom React hooks
│   │   ├── services/          # API client
│   │   └── styles/            # Global CSS
│   └── index.html
├── vercel.json                # Vercel deployment config
└── start.sh                   # One-command local startup script
```

---

## Local Setup

### Prerequisites
- Python 3.10+
- Node.js 18+

### Run both servers

```bash
chmod +x start.sh
./start.sh
```

### Or run individually

**Backend:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

FastAPI interactive docs are available at http://localhost:8000/docs

---

## Deploying to Vercel

The `vercel.json` at the project root configures the portfolio for Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# From the repo root
vercel
```

Vercel will use the `buildCommand` and `outputDirectory` from `vercel.json` automatically. The SPA rewrite rule ensures client-side routing works correctly.
