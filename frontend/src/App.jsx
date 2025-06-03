import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes ,Route } from 'react-router'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import NotifcationPage from './pages/NotifcationPage'
import OnBoardingPage from './pages/OnBoardingPage'
import ChatPage from './pages/ChatPage'
import CallPage from './pages/CallPage'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen' data-theme="night">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/notifications' element={<NotifcationPage />}/>
        <Route path='/onboarding' element={<OnBoardingPage />}/>
        <Route path='/chat' element={<ChatPage />}/>
        <Route path='/call' element={<CallPage />}/>
      </Routes>
      <Toaster />

    </div>
  )
}

export default App
