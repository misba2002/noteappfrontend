📝 NoteApp Frontend

This is the frontend of the NoteApp project, built with Next.js, React, TailwindCSS, and connected to a Node.js/Express + MongoDB backend.

The app allows users to register, log in, and manage their personal notes securely using JWT authentication.

🚀 Features

✅ User Authentication (Signup & Login with JWT) 

✅ Protected Routes (Notes accessible only when logged in) 

✅ Create, Read, Update, Delete (CRUD) Notes 

✅ Responsive UI built with TailwindCSS 

✅ Axios API client with token-based auth interceptor 

✅ Environment-based API configuration 

✅ Deployed on Vercel (Frontend) and Render (Backend) 


🛠️ Tech Stack

Frontend:

Next.js

React

Tailwind CSS

Axios

Backend (separate repo):

Node.js, Express.js, MongoDB, JWT

⚙️ Setup Instructions
1. Clone the repository
git clone [https://github.com/misba2002/noteapp-frontend.git](https://github.com/misba2002/noteappfrontend/tree/main)

cd noteapp-frontend

3. Install dependencies
npm install

4. Environment Variables

Create a .env.local file in the root with:

NEXT_PUBLIC_API_URL=https://noteapp-backend-emvn.onrender.com

4. Run development server
npm run dev

5.Quick veiw Frontend link : https://vercel.com/misbas-projects-d8f8819b?repo=https://github.com/misba2002/noteappfrontend
(Note:make sure backend in ruuning on link:https://noteapp-backend-emvn.onrender.com for frontend to work)


App will be available at http://localhost:3000
.

📦 Build & Deployment
Build for production
npm run build
npm run start

Deployment

Frontend: Vercel

Backend: Render

Make sure to set the NEXT_PUBLIC_API_URL in Vercel project settings to point to your deployed backend.

📂 Project Structure
src/
 |
 ├── app/ 
 │    ├── login/
 |    |                    # Login page
 |    |
 │    ├── signup/          # Signup page
 |    |
 │    ├── notes/           # Protected notes page
 |    |
 │    └── layout.tsx       # Global layout
 |
 │
 ├── components/           # Shared components (Navbar, NoteCard, etc.)
 |
 ├── utils/api.js          # Axios instance with JWT interceptor
 |
 ├── styles/               # Global styles
 

🔑 Authentication Flow

User signs up or logs in → Backend returns JWT

JWT is stored in localStorage

Axios interceptor attaches JWT to every request

Protected routes redirect to /login if no token is found

🖼️ Screenshots 

Login Page..comming soon

Notes Dashboard

✅ Checklist

 User Login & Signup with validation

 JWT stored and applied via interceptor

 Notes CRUD pages

 Responsive Tailwind UI

 Deployment to Vercel & Render
