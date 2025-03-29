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
            <h2 data-testid="kcjana">Kumar Chandra Jana</h2>
          </div>
          <ul className="nav-links">
            <li><a href="/" data-testid="Home">Home</a></li>
            <li><a href="/biography" data-testid="Biography">Biography</a></li>
            <li><a href="/achievements" data-testId="Achievements">Achievements</a></li>
            <li><a href="/gallery" data-testid="Gallery">Gallery</a></li>
            <li><a href="/contact" data-testid="Contact">Contact</a></li>
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
