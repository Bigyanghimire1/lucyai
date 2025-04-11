# Gemini AI Chatbot

A professional chatbot application built with React and Node.js, powered by Google's Gemini AI API.

## Features

- Modern, responsive UI built with React and Chakra UI
- Real-time chat interface
- Powered by Google's Gemini AI
- Full-stack application with Node.js backend

## Prerequisites

- Node.js 16+ installed
- Google Gemini API key

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm run install-all
```

3. Set up environment variables:
   - Copy `backend/.env.example` to `backend/.env`
   - Add your Gemini API key to `backend/.env`

## Development

Run both frontend and backend in development mode:

```bash
npm run dev
```

The frontend will be available at http://localhost:5173
The backend will be available at http://localhost:3000

## Building for Production

```bash
npm run build
```

## Tech Stack

- Frontend:
  - React with TypeScript
  - Vite
  - Chakra UI
  - Axios

- Backend:
  - Node.js with TypeScript
  - Express
  - Google Generative AI SDK 