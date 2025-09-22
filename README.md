## 🚀 CodeSync – Remote Video Calling Interview Platform

<img width="1869" height="908" alt="Screenshot 2025-09-05 120555" src="https://github.com/user-attachments/assets/c1dfe0fc-a4c7-4e93-8da6-1a1352ade9fe" />

## 📌 Overview

CodeSync is a next-generation remote interview platform that provides video calling, screen sharing, recording, and an integrated live coding dashboard.

It combines all the tools needed for technical interviews into one platform, allowing recruiters to evaluate candidates effectively without juggling between Zoom, Google Meet, and separate coding editors.

## ✨ Features

- 🎥 HD Video Calls – Smooth, real-time interviews with Stream.

- 🖥️ Screen Sharing – Share code, presentations, or problem statements.

- 📼 Recording & Playback – Save and review interview sessions later.

- 💻 Side Coding Dashboard – Built-in coding editor where candidates can:

- Write, run, and test code live.

- Support for multiple languages.

- Interviewer sees candidate’s code in real time.

- 🔐 Secure Authentication – Clerk ensures safe access for both interviewers and candidates.

- ⚡ Real-time Data Handling – Convex backend keeps video, chat, and code synced.

- 🎨 Modern & Responsive UI – Built with Tailwind CSS + Shadcn for a professional look.

- 🏗️ Scalable Architecture – Leverages Next.js server components for high performance.

## 🛠 Tech Stack

- Framework: Next.js 15 + TypeScript

- UI: Tailwind CSS + Shadcn UI

- Authentication: Clerk

- Video & Streaming: Stream

- Real-time Sync: Convex

- Coding Dashboard: Monaco Editor / CodeMirror (your choice)

- Deployment: Vercel

## 📂 Project Structure
codesync/
- │── app/                # Next.js app router pages
- │── components/         # UI components (Shadcn)
- │── convex/             # Convex backend functions
- │── editor/             # Coding dashboard logic
- │── lib/                # Utility functions
- │── public/             # Static assets
- │── styles/             # Global styles
- │── .env.local          # Environment variables
- │── package.json
- │── README.md

## ⚙️ Installation

1. **Clone the repo** :-

- git clone https://github.com/your-username/codesync.git
- cd codesync

2. **Install dependencies** :-

- npm install

3. **Set environment variables in .env.local** :-

- NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
- CLERK_SECRET_KEY=your_clerk_secret_key
- NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
- STREAM_SECRET=your_stream_secret
- CONVEX_DEPLOYMENT=your_convex_deployment_url

4. **Run locally** :-

- npm run dev

## 🚀 Deployment 

Vercel -> https://remote-interview-platform-gold.vercel.app

## 📜 License

- Licensed under the MIT License – see LICENSE
