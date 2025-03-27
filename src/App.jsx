import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/auths/sign-up/page";
import Home from "./pages/home/page";

import "./index.css";
import LandingPage from "./pages/landingPage/page";
import SignInPage from "./pages/auths/sign-in/Page";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex flex-col w-[100vw] h-[100vh]">
            <Home />
          </div>
        }
      />
      <Route
        path="/signup"
        element={
          <div className="flex flex-col w-[100vw] h-[100vh]">
            <SignUp />
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
