import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

function Aboutservices() {
  return (
    <Container>
      <section className="inner-section">
        <div className="top">
          <h1>Our Services</h1>
        </div>
        <div className="bottom">
          <div className="service-one">
            <h3>Market Expansion</h3>
            <p>
              DK Group works closely with its clients to develop a market entry
              strategy tailored to their specific needs and goals. This includes
              identifying the most appropriate market entry method, such as
              exporting, licensing, DK Group also provides support in
              establishing local partnerships, identifying potential customers,
              and navigating regulatory and legal requirements.
            </p>
            <button>Learn more</button>
          </div>
          <div className="service-two">
            <h3>Public Relations</h3>
            <p>
              DK Group helps organizations identify and engage with influencers
              and thought leaders to promote their products, services, and
              brand. This includes developing influencer marketing strategies,
              identifying relevant influencers, and managing influencer
              relationships.
            </p>
            <button>Learn more</button>
          </div>
        </div>
        <div className="bottom-button">
          <button>
            See all <AiOutlineArrowRight />
          </button>
        </div>
      </section>
    </Container>
  );
}

export default Aboutservices;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2cm 0;

  .inner-section {
    width: 80%;
    border: 1px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 100%;
    }
    .top,
    .bottom,
    .bottom-button {
      width: 100%;
    }
    .top {
      margin-bottom: 1cm;
      margin-left: 1cm;
      h1 {
        color: #000;
        text-align: left;
        font-family: Roboto Slab;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        @media (min-width: 320px) and (max-width: 599px) {
          text-align: center;
        }
      }
    }
    .bottom {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px;
      justify-content: center;
      @media (min-width: 320px) and (max-width: 599px) {
        grid-template-columns: repeat(1, 1fr);
        width: 90%;
      }
      .service-one,
      .service-two {
        display: flex;
        flex-direction: column;
        padding: 1cm;
        align-items: center;
        border-radius: 50px;
        background: #fff;
        width: 80%;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3),
          0px 2px 6px 2px rgba(0, 0, 0, 0.15);
        @media (min-width: 320px) and (max-width: 599px) {
          width: 80%;
          padding: 1cm 0.5cm;
          border-radius: 20px;
        }
        h3 {
          color: #000225;
          text-align: center;
          font-family: Roboto Slab;
          font-size: 30px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin-bottom: 0.5cm;
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 24px;
          }
        }
        p {
          color: #000225;
          text-align: center;
          font-family: Roboto Slab;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-bottom: 0.5cm;
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 16px;
          }
        }
        button {
          padding: 0.15cm 0.5cm;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          color: white;
          background-color: #000225;
          border-radius: 10px;
          border: 1px solid #000225;
          cursor: pointer;
          &:hover {
            color: #000225;
            background-color: white;
          }
        }
      }
    }
    .bottom-button {
      margin: 1cm 0;
      display: flex;
      justify-content: flex-end;
      margin-right: 1cm;
      button {
        padding: 0.25cm 1cm;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: Roboto Slab;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border-radius: 1cm;
        background-color: #000225;
        color: white;
        border: none;
        cursor: pointer;
        svg {
          margin: 0 0 0 0.5cm;
        }
        &:hover {
          svg {
            margin-left: 1cm;
            transition: margin 0.1s 250ms ease-in-out;
          }
        }
      }
    }
  }
`;
