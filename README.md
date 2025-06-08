# 💬 ChatApp in MERN Stack with Stream Chat & Video Calls

A real-time chat application built using the **MERN stack**, integrated with **Stream Chat SDK** for messaging and **audio/video calling**, styled using **DaisyUI**, and powered by modern state and data management tools like **Zustand** and **TanStack Query**.

🌐 **Live Demo**: [chatapp-in-mern.onrender.com](https://chatapp-in-mern.onrender.com)

---

## 🚀 Features

- 🔐 User authentication (login/signup)
- 💬 Real-time one-to-one messaging (powered by Stream Chat)
- 🎥 Video & audio calling with link sharing
- 🌙 Light/Dark mode (via DaisyUI)
- 🗃 State management with Zustand
- ⚡ API caching & async handling using TanStack Query
- 🧠 Custom hooks for authentication and user state
- 🪄 Responsive UI design with Tailwind CSS and DaisyUI

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js (Vite)
- Tailwind CSS + DaisyUI
- Zustand (state management)
- TanStack React Query
- Stream Chat React SDK
- Stream Video SDK
- React Router
- React Hot Toast

### 🔹 Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Stream Chat Token Generation

---

## 📦 Setup Instructions

### 🧑‍💻 Prerequisites
- Node.js v18+
- MongoDB database
- Stream Chat & Video account (get API key/token)

### ⚙️ Environment Variables

Create a `.env` file in `/backend`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

Create a .env file in /frontend (Vite):

env
Copy
Edit
VITE_STREAM_API_KEY=your_stream_api_key

🔧 Installation
bash
Copy
Edit
# Clone the repository
git clone https://github.com/your-username/chatapp-in-mern.git
cd chatapp-in-mern

# Install backend dependencies
cd backend
npm install

# Start the backend server
npm run start

# In a new terminal, install frontend dependencies
cd ../frontend
npm install

# Start the frontend dev server
npm run dev
🏗️ Folder Structure
css
Copy
Edit
/chatapp-in-mern
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── middleware
│   │   └── index.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── hooks
│   │   ├── pages
│   │   ├── store (Zustand)
│   │   └── main.jsx
📸 Screenshots
(Add screenshots here of chat UI, video call interface, auth page, etc.)

🧪 Future Improvements
Group chat support

Message reactions and typing indicators

Chat themes and emojis

Push notifications

PWA support
