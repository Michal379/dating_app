import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Signin from './components/signin/Signin';

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  const handleSignup = (user) => {
    setUserDetails(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSignin = (user) => {
    // Add your logic for handling the user signin here
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin onSignin={handleSignin} />} />
      </Routes>
      <Footer />
      {message && <div className="message">{message}</div>}
    </BrowserRouter>
  );
}

export default App;
