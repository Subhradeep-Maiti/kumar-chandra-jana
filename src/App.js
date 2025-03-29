import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduction from './Components/Introduction';
import Biography from './Components/Biography';
import Achievements from './Components/Achievements';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import './App.css'; // Import the CSS file for styling
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <h2>Kumar Chandra Jana</h2>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/biography">Biography</a></li>
            <li><a href="/achievements">Achievements</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Introduction/>} />
          <Route path="/biography" element={<Biography/>} />
          <Route path="/achievements" element={<Achievements/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
