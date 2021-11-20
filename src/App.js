import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/blabla">sadad</Link>
        <Link to='/'>Home</Link>
       <Routes>
           <Route path='/' exact element={<HomePage/>} />
           <Route path='/blabla' element={<TestPage/>} />
       </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
