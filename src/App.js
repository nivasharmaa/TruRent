import './App.css';
import React from "react";
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Contact from "./pages/Contact.js";
import Trucks from "./pages/Trucks.js";
import About from "./pages/About.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./styles.css";

function App() {
  return (
<div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path = "/" element = {<Home />}/>
          <Route path = "/Services" element = {<Services />}/>
          <Route path = "/Contact" element = {<Contact />}/>
          <Route path = "/Trucks" element = {<Trucks />}/>
          <Route path = "/About" element = {<About />}/>
        </Routes>
        
        <Footer />
      </Router>
        </div>
  );
}

export default App;
