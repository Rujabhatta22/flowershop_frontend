import React from 'react';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
// import Write from './pages/write/Write';
import Settings from './pages/settings/Setting';
import Write from "./pages/write/Write";
import Contacts from './pages/contact/Contact';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/aboutus/About';
import Category from './pages/category/Category';
import { useContext } from 'react';
import { Context } from './context/Context';
import Admin from './pages/admin/Admin';
// import Users from './pages/admin/Users';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route exact path="/admin" element={<Admin />} />
        
        {/* <Route exact path="/user" element={<Users />} /> */}
      </Routes>
      <TopBar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ?<Home/>:<Register />} />
        <Route path="/login" element={user ?<Home/>:<Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/settings" element={user ?<Settings/>:<Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      </Router>
  );
}

export default App;
