import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Adduser from "./Pages/Adduser";
import About from "./Pages/About";
import AddSensor from "./Pages/AddSensor";
import SensorDataChart from "./SensorDataChart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/adduser" element={<Adduser />} />
        <Route path="/home/about" element={<About />} />
        <Route path="/home/addsensor" element={<AddSensor />} />
        {/* <Route path="/home/chart" element={<SensorDataChart />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
