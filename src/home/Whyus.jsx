import React from "react";
import styled from "styled-components";

function Whyus() {
  return (
    <Container>
      <h1>Why us?</h1>
      <div className="content">
        <WhyUsItem
          url="/images/home images/reputation icon.svg"
          details="Because we know our reputation is everything, we strive and ensure to give our clients top-most services with unbelievable result"
        />
        <WhyUsItem
          url="/images/home images/marketing icon.svg"
          details="Our inventive marketing strategies are built to highlight what makes your brand unique and translate high performance marketing in to targeted and effective outreach"
        />
        <WhyUsItem
          url="/images/home images/expert icon.svg"
          details="The DK Group team has experts who have lived and worked abroad and in Africa with decades of experience helping foreign compnaies establish and grow in Africa"
        />
        <WhyUsItem
          url="/images/home images/africa-icon.svg"
          details="The DK Group is accustomed to work for our clients in any part or location in Africa"
        />
      </div>
    </Container>
  );
}

function WhyUsItem({ url, details }) {
  return (
    <UsContainer>
      <div className="icon">
        <img src={url} alt="why us detail" />
      </div>
      <div className="content-text">
        <p>{details}</p>
      </div>
    </UsContainer>
  );
}
export default Whyus;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/images/home images/icons-pattern.svg");
  background-repeat: no-repeat;
  background-position: 100%;
  @media (min-width: 320px) and (max-width: 599px) {
    padding: 0;
    margin: 0;
    padding: 0 0.5cm;
  }
  h1 {
    margin: 1.5cm 0 0.5cm 0;
    font-family: Roboto Slab;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media (min-width: 320px) and (max-width: 599px) {
      font-size: 36px;
    }
  }
  .content {
    width: 88%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding-bottom: 1.5cm;
    @media (min-width: 320px) and (max-width: 599px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.5cm;
      width: 95%;
    }
  }
`;

const UsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;
  gap: 0.5cm;
  @media (min-width: 320px) and (max-width: 599px) {
    width: 90%;
  }
  .icon {
    width: 150px;
    height: 150px;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 100px;
      height: 100px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content-text {
    width: 100%;
    p {
      font-family: Roboto Slab;
      font-size: 20px;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      @media (min-width: 320px) and (max-width: 599px) {
        color: #000;
        font-family: Roboto Slab;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }
`;
