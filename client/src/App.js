import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Matches from './components/matches/Matches';
import Search from './components/search/Search';
import Messages from './components/messages/Messages';
import Activity from './components/activity/Activity';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/online" element={<div>Online</div>} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/search" element={<Search />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
