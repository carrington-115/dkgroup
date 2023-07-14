import React from "react";
import styled from "styled-components";

function Homeservices() {
  return (
    <Container>
      <div className="text-content">
        <h1>Our Services</h1>
        <ol>
          <li>Market Expansion</li>
          <li>Economic Intelligence</li>
          <li>Public Relations</li>
          <li>Sales Representation</li>
          <li>Liaison Services</li>
          <li>Project planning and Management</li>
          <li>Business to Government</li>
          <li>Translation services</li>
        </ol>
        <button>Learn more</button>
      </div>
      <div className="image-content">
        <img
          src="/images/home images/services-image.png"
          alt="home-service-image"
        />
      </div>
    </Container>
  );
}

export default Homeservices;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2cm 0;
  gap: 1cm;
  .text-content {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-family: Roboto Slab;
      font-size: 32px;
      font-style: bold;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 0.5cm;
    }
    ol {
      li {
        font-family: Roboto Slab;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 1cm;
      }
    }
    button {
      font-family: Roboto Slab;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: white;
      padding: 0.25cm 1cm;
      border-radius: 50px;
      margin-top: 0.5cm;
      background: #000225;
      cursor: pointer;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3),
        0px 2px 6px 2px rgba(0, 0, 0, 0.15);
      &:hover {
        transform: scale(1.1, 1.1);
        transition: scale 0.1s 250ms ease-in-out;
      }
    }
  }
  .image-content {
    width: 30%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
