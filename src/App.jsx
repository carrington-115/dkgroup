import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contactus from "./Contactus";
function App() {
  return (
    <Container className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``;
