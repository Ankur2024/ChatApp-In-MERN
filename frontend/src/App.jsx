import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/home/Home.jsx";
import SignUp from "./components/login/SignUp.jsx";
import Login from "./components/login/Login.jsx";
import Notification from "./components/notification/Notification.jsx";
import Call from "./components/call/Call.jsx";
import Chat from "./components/chat/Chat.jsx";
import OnBoarding from "./components/onboarding/OnBoarding.jsx";

function App() {
  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/call" element={<Call />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>
    </div>
  );
}

export default App;
