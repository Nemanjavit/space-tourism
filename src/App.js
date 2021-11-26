import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import Destionations from "./pages/Destionations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
// components
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes basename="/space-tourism">
          <Route path="/" exact element={<HomePage />} />
          <Route path="/destination" element={<Destionations />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
