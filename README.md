# Sukruti Mallesh — Personal Portfolio

A modern personal portfolio website built with **React** (Vite) and **FastAPI** (Python).

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
│   │   ├── hooks/             # Custom React hooks
│   │   ├── services/          # API client
│   │   └── styles/            # Global CSS
│   └── index.html
└── start.sh                   # One-command startup script
```

## Quick Start

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

## API Docs

FastAPI auto-generates interactive docs at http://localhost:8000/docs
