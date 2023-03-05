//import logo from './logo.svg';
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";



function App() {
 
  return (
    <div fluid className="App">    
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
