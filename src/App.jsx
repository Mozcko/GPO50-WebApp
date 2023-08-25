import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
