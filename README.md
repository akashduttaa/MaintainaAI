# SubSense AI – Smart Subscription Manager

A full-stack AI-powered subscription management platform with futuristic Gen-Z fintech styling, 3D visuals, AI insights, predictive analytics, chatbot assistant, and smart renewal alerts.

## Stack
- Frontend: Next.js, React, Tailwind CSS, Framer Motion, React Three Fiber, Recharts, ShadCN-inspired UI primitives
- Backend: Node.js, Express.js, MongoDB + Mongoose, JWT auth
- AI: OpenAI-ready service layer (`backend/src/services/aiService.js`)
- Notifications: In-app timeline API with extension points for email/push

## Project Structure
- `frontend/` – Next.js application (Landing, Login, Signup, Dashboard, Add Subscription, Analytics, AI Insights, Chatbot, Settings, Notification Center)
- `backend/` – Express API with auth, subscription CRUD, dashboard metrics, AI insights, predictive spending, chatbot route, notification timeline

## Run locally
```bash
npm install
npm run dev
```
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000/api/health`

## Deploy
### Vercel (Frontend)
1. Import repo in Vercel.
2. Set root to `frontend`.
3. Add `NEXT_PUBLIC_API_URL` to point to backend Render URL.

### Render (Backend)
1. Create Web Service from repo, root `backend`.
2. Build command: `npm install`
3. Start command: `npm start`
4. Add environment variables from `.env.example`.
5. Provision MongoDB Atlas and set `MONGO_URI`.
