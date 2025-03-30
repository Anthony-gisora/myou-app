import { Routes, Route } from "react-router-dom";

import "./index.css";
import LandingPage from "./pages/landingPage/LandingPage";
import SignUpPage from "./pages/auths/sign-up/Sign-Up";
import SignInPage from "./pages/auths/sign-in/Sign-In";
import Home from "./pages/home/Home";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex flex-col w-[100vw] h-[100vh]">
            <SignedIn>
              <Home />
            </SignedIn>
            <SignedOut>
              <LandingPage />
            </SignedOut>
          </div>
        }
      />
      <Route
        path="/signup"
        element={
          <div className="flex flex-col w-[100vw] h-[100vh]">
            <SignUpPage />
          </div>
        }
      />
      <Route
        path="/signin"
        element={
          <div className="flex flex-col w-[100vw] h-[100vh]">
            <SignInPage />
          </div>
        }
      />
      <Route
        path="/home"
        element={
          <div className="flex flex-col w-[100vw] h-[100vh]">
            <Home />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
