#!/bin/bash
# Start both backend and frontend servers for local development.

set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Starting Sukruti Portfolio..."
echo "================================"

# Backend
echo "[1/2] Setting up Python backend..."
cd "$PROJECT_DIR/backend"
if [ ! -d "venv" ]; then
  /usr/bin/python3 -m venv venv
fi
source venv/bin/activate
pip install -q -r requirements.txt
echo "  Backend starting on http://localhost:8000"
uvicorn app.main:app --reload --port 8000 &
BACKEND_PID=$!

# Frontend
echo "[2/2] Starting React frontend..."
cd "$PROJECT_DIR/frontend"
npm install --silent 2>/dev/null
echo "  Frontend starting on http://localhost:5173"
npm run dev &
FRONTEND_PID=$!

echo ""
echo "================================"
echo "Portfolio is running!"
echo "  Frontend: http://localhost:5173"
echo "  Backend:  http://localhost:8000"
echo "  API Docs: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop both servers."

trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit" INT TERM
wait
