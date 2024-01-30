import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import ProjectGallery from "./components/ProjectGallery";
import Contact from "./components/Contact";
import "./App.css"; // If you have a separate CSS file for App
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as necessary */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
