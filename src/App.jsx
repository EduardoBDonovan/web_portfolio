import { useState } from "react";
import "./App.css";
import Pipnav from "./components/Pipnav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadIn from "./pages/LoadIn";

function App() {
  return (
    <div className="App">
      <Pipnav />
      <LoadIn />
    </div>
  );
}

export default App;
