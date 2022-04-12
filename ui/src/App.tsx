import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Members from "./pages/members";
import Manuals from "./pages/manuals";
import Devices from "./pages/devices";
import Layouts from "./layouts";
import Providers from "./providers";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Layouts>
          <Routes>
            <Route path="/devices" element={<Devices />} />
            <Route path="/members" element={<Members />} />
            <Route path="/manuals" element={<Manuals />} />
          </Routes>
        </Layouts>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
