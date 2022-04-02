import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Devices from "./pages/devices";
import Layouts from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <Layouts>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/devices" element={<Devices />} />
        </Routes>
      </Layouts>
    </BrowserRouter>
  );
}

export default App;
