import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
/* import Project from "./components/pages/Project"; */

import Container from "./components/layout/Container";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";
function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Company" element={<Company />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/NewProject" element={<NewProject />} />
          <Route exact path="/Project/:id" element={<Project />} />

        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
