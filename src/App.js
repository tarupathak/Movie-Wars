import React from "react";
import "./App.css";
import LandingPage from "./Pages/Landing Page";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />}/>
      </Routes>
    </>
  );
};

export default App;
