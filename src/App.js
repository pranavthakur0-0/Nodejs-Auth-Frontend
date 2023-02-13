import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
   <Router>
      <Routes>
        <Route exact path="/" element={<Profile />}> </Route>
        <Route exact path="/login" element={<Login />}> </Route>
        <Route exact path="/register" element={<Register />}> </Route>


      </Routes>
   </Router>
  );
}

export default App;
