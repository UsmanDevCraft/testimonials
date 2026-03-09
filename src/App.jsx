import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newspace from "./components/Newspace";
import Addreview from "./components/Addreview";
import "./styles/Home.css";
import Home from "./pages/app/Home";
import MainPage from "./pages/app/MainPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import SpacePage from "./pages/app/SpacePage";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/newspace" element={<Newspace />} />
          <Route path="/spacepage" element={<SpacePage />} />
          <Route path="/addreview" element={<Addreview />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
