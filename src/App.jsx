import React from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Newspace from './components/Newspace';
import SpacePage from './components/SpacePage';
import Addreview from './components/Addreview';
import "./styles/Home.css"
import MainPage from './components/MainPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/newspace' element={<Newspace />} />
        <Route path='/spacepage' element={<SpacePage />} />
        <Route path='/addreview' element={<Addreview />} />
      </Routes>
    </Router>
  )
}

export default App
