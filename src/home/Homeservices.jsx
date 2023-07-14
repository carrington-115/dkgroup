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
      </div>
      <div className="image-content">
        <img
          src="/iamges/home images/services-image.png"
          alt="home-service-image"
        />
      </div>
    </Container>
  );
}

export default Homeservices;

const Container = styled.div``;
