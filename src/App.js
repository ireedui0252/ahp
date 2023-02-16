import React from "react";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingIn from "./components/signin/SingIn";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SingIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
