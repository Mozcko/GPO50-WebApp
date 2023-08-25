import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar, Footer } from "./components";
import { Landing } from "./pages/Landing"
import { Manada } from "./pages/Manada"
import { Tropa } from "./pages/Tropa";
import { Comunidad } from "./pages/Comunidad"
import { Clan } from "./pages/Clan"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/manada" element={<Manada />} />
          <Route path="/tropa" element={<Tropa />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/clan" element={<Clan />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
