import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { NotificationPage } from "./pages/NotificationPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { CallPage } from "./pages/CallPage";
import { ChatPage } from "./pages/ChatPage";

function App() {
  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
