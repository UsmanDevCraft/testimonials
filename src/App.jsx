import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/app/Home"));
const SpacePage = lazy(() => import("./pages/app/SpacePage"));
const Newspace = lazy(() => import("./components/Newspace"));
const Addreview = lazy(() => import("./components/Addreview"));
import "./styles/Home.css";
import MainPage from "./pages/app/MainPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Navbar from "./components/Navbar";
import Loading from "./components/Loader";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/newspace" element={<Newspace />} />
            <Route path="/spacepage" element={<SpacePage />} />
            <Route path="/addreview" element={<Addreview />} />
          </Route>
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
