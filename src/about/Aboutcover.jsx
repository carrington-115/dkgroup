import React from "react";
import styled from "styled-components";
import TopHeader from "../home/TopHeader";

function Aboutcover() {
  return (
    <PageCover>
      <TopHeader />
      <div className="backdrop" />
      <div className="left-side-text-container">
        <div className="content">
          <h2 className="aside-text">Learn about</h2>
          <h2 className="main-text">DK GROUP</h2>
          <h2 className="aside-text">Vision and Mission</h2>
        </div>
      </div>
    </PageCover>
  );
}

export default Aboutcover;

const PageCover = styled.div`
  width: 100vw;
  height: 90vh;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  background: url("/images/about images/image 8.png");
  background-repeat: no-repeat;
  background-position: 100%;
  @media (min-width: 320px) and (max-width: 599px) {
    background: url("/images/about images/about-mobile-cover.png");
  }
  .backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .left-side-text-container {
    position: absolute;
    z-index: 2;
    background-color: white;
    left: 0;
    top: 0;
    bottom: 0;
    width: 42vw;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 320px) and (max-width: 599px) {
      background-color: transparent;
      width: 70vw;
    }
    .content {
      display: flex;
      flex-direction: column;
      margin-left: 1cm;
      gap: 5px;
      @media (min-width: 320px) and (max-width: 599px) {
        padding: 5cm 0 0 0;
        gap: 15px;
      }
      .aside-text {
        font-family: Roboto Slab;
        font-size: 30px;
        font-style: normal;
        line-height: normal;
        font-weight: bold;
        color: #000225;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 24px;
          color: white;
        }
      }
      .main-text {
        font-family: Roboto Slab;
        font-size: 60px;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        color: white;
        padding: 0.25cm 0.5cm;
        border-radius: 10px;
        background-color: #000225;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 40px;
          background-color: white;
          color: #000225;
        }
      }
    }
  }
`;
