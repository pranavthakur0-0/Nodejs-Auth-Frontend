import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import "react-toastify/dist/ReactToastify.css"
import ResetPage from "./pages/reset";
import ForgotPassword from "./pages/forgetpassword"
function App() {
  return (
   <Router>
      <Routes>
        <Route exact path="/" element={<Profile />}> </Route>
        <Route exact path="/login" element={<Login />}> </Route>
        <Route exact path="/register" element={<Register />}> </Route>
        <Route exact path="/forgot_password" element={<ForgotPassword />}> </Route>
        <Route exact path="/reset_password/:id/:token" element={<ResetPage />}> </Route>

      </Routes>
   </Router>
  );
}

export default App;
