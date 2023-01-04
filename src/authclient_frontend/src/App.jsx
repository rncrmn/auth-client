import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, NotFound } from "./pages";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
