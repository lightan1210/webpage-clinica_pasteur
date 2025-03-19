import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import NoPage from "./pages/NoPage.js";
import Staff from "./pages/Staff.js";
import Patients from "./pages/Patients.js"
import About from "./pages/About.js"

import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/pacientes" element={<Patients />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
