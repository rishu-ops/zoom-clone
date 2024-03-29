import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/singin/Signin.jsx';
import Signup from './components/singup/Signup.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import { AuthProvider } from './contex/Auth.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx';
import Host from './pages/host/Host.jsx';
import Join from './pages/join/Join.jsx';
import { SocketProvider } from './provider/Socket.jsx';
import { PeerProvider  } from './provider/Peer.jsx';
import RoomPage from './pages/room/RoomPage.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <SocketProvider>
      <PeerProvider>
  <Router>
    
    <Navbar/>

    <Routes>
      
      <Route path="/" element={<App />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/host" element={<Host />} />
      <Route path="/join" element={<Join />} />
      <Route path="/room/:roomId" element={<RoomPage/>} />

    </Routes>

   </Router>
  </PeerProvider>
  </SocketProvider>
  </AuthProvider>
);
