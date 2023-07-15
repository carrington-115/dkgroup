import React from "react";
import styled from "styled-components";

function Foundercontent() {
  return (
    <Container>
      <div className="first">
        <div className="founder-image">
          <img src="/images/about images/founder.png" alt="" />
        </div>
        <div className="founder-text">
          <p>
            &nbsp; Meet Duncan Ewoko, the visionary founder and CEO of The DK
            Group. With over 20 years of experience in international business,
            Duncan has become a leading expert in helping foreign companies
            establish and grow in Africa. His passion for unlocking the
            continent's potential has driven him to build a team of seasoned
            professionals who are dedicated to delivering exceptional results
            and service to clients across the globe. <br /> &nbsp; Born and
            raised in the sea side city, Limbe, Cameroon, Duncan has a deep
            understanding of the unique opportunities and challenges of doing
            business in Africa. He has done business across many countries in
            Africa and has developed a vast network of contacts and resources
            that he leverages to help clients succeed. <br /> &nbsp;He is also a
            sought-after speaker and thought leader, sharing his insights and
            expertise on international business and African development at
            conferences and events around the world. <br /> &nbsp; At The DK
            Group, Duncan and his team are passionate about empowering
            businesses to thrive in Africa's dynamic and rapidly evolving
            market. Whether you're looking to expand your operations, establish
            a new venture, or navigate the complexities of local regulations and
            customs, Duncan and his team have the knowledge, experience, and
            dedication to help you achieve your goals. Contact us today to find
            out how we can help you unlock your potential in Africa.
          </p>
        </div>
      </div>
      <div className="second">
        <h1>Our Mission</h1>
        <h2>
          “At DK Group, we unlock Africa's potential by empowering businesses to
          succeed and creating positive impact in the communities we serve.
          <br />
          <br />
          Duncan Ewoko, CEO
        </h2>
      </div>
    </Container>
  );
}

export default Foundercontent;

const Container = styled.div`
  .first {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: url("/images/about images/founder-patterns.svg");
    padding: 1.5cm 0;
    @media (min-width: 320px) and (max-width: 599px) {
      flex-direction: column;
    }
    .founder-image {
      width: 35%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1cm;
      }
      img {
        width: 80%;
        height: 80%;
      }
    }
    .founder-text {
      width: 50%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        text-align: justify;
      }
    }
  }
  .second {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2cm 0;
    background: url("/images/about images/ceoquote.png");
    @media (min-width: 320px) and (max-width: 599px) {
      background: url("/images/about images/mission-mobile-back.png");
    }
    h1 {
      color: #fff;
      text-align: justify;
      font-family: Roboto Slab;
      font-size: 64px;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      margin-bottom: 0.5cm;
      width: 70%;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 48px;
      }
    }
    h2 {
      color: #fff;
      text-align: right;
      font-family: Roboto Slab;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      width: 70%;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 30px;
        width: 90%;
      }
    }
  }
`;
