//import logo from './logo.svg';
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import BottonScroll from "./components/BottonScroll";



function App() {
 
  return (
    <div fluid className="App">    
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <BottonScroll/>
      <Footer/>
    </div>
  );
}

export default App;
