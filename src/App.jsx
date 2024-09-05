import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Plans from "./Pages/Plans";
import Prepares from "./Pages/Prepares";
import Excutes from "./Pages/Excutes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Plans />} /> {/* Default route */}
          <Route path="/plans" element={<Plans />} />
          <Route path="/prepares" element={<Prepares />} />
          <Route path="/executes" element={<Excutes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
