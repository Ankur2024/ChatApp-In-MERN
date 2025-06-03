import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes ,Route, Navigate } from 'react-router'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import NotifcationPage from './pages/NotifcationPage'
import OnBoardingPage from './pages/OnBoardingPage'
import ChatPage from './pages/ChatPage'
import CallPage from './pages/CallPage'
import { Toaster } from 'react-hot-toast'
import { axiosInstance } from './lib/axios'
import { useQuery } from "@tanstack/react-query"

function App() {

  const { data:authData, isLoading, error } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res =await axiosInstance.get("/auth/me");
      return res.data;
    },
    retry: false,
  });

  const authUser = authData?.user;

  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!authUser ? <LoginPage />: <Navigate to="/" />} />
        <Route path="/signup" element={!authUser ? <SignupPage />: <Navigate to="/" />} />
        <Route path="/notification" element={authUser ? <NotifcationPage />: <Navigate to="/login" />} />
        <Route path="/call" element={authUser? <CallPage />: <Navigate to="/login" />} />
        <Route path="/chat" element={authUser ? <ChatPage />: <Navigate to="/login" />} />
        <Route path="/onboarding" element={authUser ? <OnBoardingPage /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
      
    </div>
  );
}

export default App;
