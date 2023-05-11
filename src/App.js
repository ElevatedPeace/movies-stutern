import React from "react";
import Movies from "./components/Movies";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>

  );
};

export default App;
