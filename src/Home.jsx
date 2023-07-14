import React from "react";
import styled from "styled-components";
import Homecover from "./home/Homecover";
import About from "./home/About";
import Whyus from "./home/Whyus";
import Homeservices from "./home/Homeservices";

function Home() {
  return (
    <Container>
      <Homecover />
      <About />
      <Whyus />
      <Homeservices />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
