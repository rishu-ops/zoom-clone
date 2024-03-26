import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/singin/Signin.jsx';
import Signup from './components/singup/Signup.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import { AuthProvider } from './contex/Auth.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <Router>
    
    <Navbar/>

    <Routes>
      
      <Route path="/" element={<Sidebar />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />

    </Routes>

  </Router>

  </AuthProvider>

);
