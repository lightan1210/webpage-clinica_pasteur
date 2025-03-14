import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import NoPage from "./pages/NoPage.js";
import Staff from "./pages/Staff.js";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
