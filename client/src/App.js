import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  const [user, setUser] = useState(null); // Define the setUser function
  const [message, setMessage] = useState('');
 
  const handleSignup = (user) => {
    setUserDetails(user);
  };
  
  return (
    <BrowserRouter>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/admin" element={<Admin />} /> 
      </Routes>
      <Footer />
      {message && <div className="message">{message}</div>}
    </BrowserRouter>
  );
}

export default App;
