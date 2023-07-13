import React from "react";
import styled from "styled-components";
import Homecover from "./home/Homecover";
import About from "./home/About";

function Home() {
  return (
    <Container>
      <Homecover />
      <About />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
