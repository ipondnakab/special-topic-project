import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Devices from "./pages/devices";
import Layouts from "./layouts";
import Providers from "./providers";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Layouts>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/devices" element={<Devices />} />
          </Routes>
        </Layouts>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
