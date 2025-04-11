# Kill existing Node.js processes
taskkill /F /IM node.exe 2>$null

# Start backend server
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\backend'; npm run dev"

# Start frontend server
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\frontend'; npm run dev"

# Wait a moment for servers to start
Start-Sleep -Seconds 5

# Open in browser
Start-Process "chrome.exe" "http://localhost:5173" 