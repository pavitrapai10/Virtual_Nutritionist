import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Login - Nutrition App";
        metaDescription = "Log in to your Nutrition App account.";
        break;
      case "/forget-password":
        title = "Forget Password - Nutrition App";
        metaDescription = "Reset your Nutrition App password.";
        break;
      case "/signup":
        title = "Sign Up - Nutrition App";
        metaDescription = "Create a new account on Nutrition App.";
        break;
      case "/landing":
        title = "Welcome - Nutrition App";
        metaDescription = "Welcome to the Nutrition App.";
        break;
      default:
        title = "Nutrition App";
        metaDescription = "Your go-to app for nutrition tracking.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      let metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (!metaDescriptionTag) {
        metaDescriptionTag = document.createElement('meta');
        metaDescriptionTag.name = "description";
        document.head.appendChild(metaDescriptionTag);
      }
      metaDescriptionTag.content = metaDescription;
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
}

export default App;
