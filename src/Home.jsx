import React from "react";
import styled from "styled-components";
import Homecover from "./home/Homecover";
import About from "./home/About";
import Whyus from "./home/Whyus";

function Home() {
  return (
    <Container>
      <Homecover />
      <About />
      <Whyus />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
