import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { NotificationPage } from "./pages/NotificationPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { CallPage } from "./pages/CallPage";
import { ChatPage } from "./pages/ChatPage";
import { Toaster } from 'react-hot-toast';
import PageLoader from "./components/PageLoader";
import { UseAuth } from "./hooks/UseAuth";

function App() {

const {isLoading, authUser}=UseAuth()
 
const isAuthenticated = Boolean(authUser);
const isOnboarded = authUser?.isOnboarded;
if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="h-screen" data-theme="forest">
      <Routes>
        <Route path="/" element={ isAuthenticated && isOnboarded ?( <HomePage />) : <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />} />
        <Route path="/login" element={ !isAuthenticated ? <LoginPage /> : <Navigate to='/' />} />
        <Route path="/signup" element={  !isAuthenticated ? <SignUpPage /> : <Navigate to='/' />} />
        <Route path="/notification" element={ isAuthenticated ? <NotificationPage /> : <Navigate to='/login' />} />
        <Route path="/onboarding" element={ isAuthenticated ? <OnboardingPage /> : <Navigate to='/login' />} />
        <Route path="/call" element={ isAuthenticated ? <CallPage /> : <Navigate to='/login' />} />
        <Route path="/chat" element={ isAuthenticated ? <ChatPage /> : <Navigate to='/login' />} />
      </Routes>
       <Toaster />
    </div>
  ); 
}

export default App;
