import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { NotificationPage } from "./pages/NotificationPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { CallPage } from "./pages/CallPage";
import { ChatPage } from "./pages/ChatPage";
import { Toaster } from 'react-hot-toast';
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./lib/axios";

function App() {

  const {data: authData, isloading, error} = useQuery({
    queryKey: ['authUser'],
    queryFn: async ()=>{
      const response = await axiosInstance.get('/auth/me');
      return response.data;
    },
    retry: false, // Disable retry on failure
  })

const authUser = authData?.user;  
  return (
    <div className="h-screen" data-theme="forest">
      <Routes>
        <Route path="/" element={ authUser ? <HomePage /> : <Navigate to='/login' />} />
        <Route path="/login" element={ !authUser ? <LoginPage /> : <Navigate to='/' />} />
        <Route path="/signup" element={  !authUser ? <SignUpPage /> : <Navigate to='/' />} />
        <Route path="/notification" element={ authUser ? <NotificationPage /> : <Navigate to='/login' />} />
        <Route path="/onboarding" element={ authUser ? <OnboardingPage /> : <Navigate to='/login' />} />
        <Route path="/call" element={ authUser ? <CallPage /> : <Navigate to='/login' />} />
        <Route path="/chat" element={ authUser ? <ChatPage /> : <Navigate to='/login' />} />
      </Routes>
       <Toaster />
    </div>
  ); 
}

export default App;
