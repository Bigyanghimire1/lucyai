@echo off
taskkill /F /IM node.exe >nul 2>&1

start cmd /k "cd frontend && npm run dev"
timeout /t 2
start cmd /k "cd backend && npm run dev"
timeout /t 3
start chrome http://localhost:5173 