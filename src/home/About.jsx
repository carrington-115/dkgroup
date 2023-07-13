import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutContent>
      <h1>About us</h1>
      <hr />
      <h2>
        “The DK Group is a marketing consulting and trade facilitation company
        that uses both modern and conventional methods of marketing to assist in
        the development and improve sales for new and established businesses in
        Africa”
      </h2>
      <button>
        <div>
          Learn More
          <img src="/arrow_forward.svg" alt="forward-arrow" />
        </div>
      </button>
    </AboutContent>
  );
}

export default About;

const AboutContent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2cm 0;
  background-color: #000225;
  color: white;
  h2,
  h1 {
    width: 70%;
    font-family: Roboto Slab;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  h1 {
    font-weight: bold;
    font-size: 54px;
    padding-bottom: 0.5cm;
    border-bottom: 2px solid white;
  }
  h2 {
    margin-top: 0.5cm;
  }
  button {
    align-self: flex-start;
    margin-left: 5cm;
    margin-top: 1cm;
    border: none;
    background-color: transparent;
    font-family: Roboto Slab;
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 0.25cm;
    border-bottom: 2px solid white;
    color: white;
    cursor: pointer;
    div {
      display: flex;
      justify-content: space-around;
      img {
        padding-left: 0.5cm;
      }
    }
    &:hover {
      img {
        padding-left: 1cm;
        transition: padding 250ms ease-in-out;
      }
    }
  }
`;
