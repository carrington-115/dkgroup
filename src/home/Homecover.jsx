import React from "react";
import styled from "styled-components";
import TopHeader from "./TopHeader";

function Homecover() {
  return (
    <PageCover>
      <TopHeader />
      <div className="backdrop" />
      <div className="left-side-text-container">
        <div className="content">
          <h2 className="aside-text">WELCOME TO</h2>
          <h2 className="main-text">DK GROUP</h2>
          <h2 className="aside-text">
            Your vision, <br /> our Mission
          </h2>
        </div>
      </div>
    </PageCover>
  );
}

export default Homecover;

const PageCover = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  background: url("/images/home images/page-cover.png");
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
    .content {
      display: flex;
      flex-direction: column;
      margin-left: 1cm;
      gap: 5px;
      .aside-text {
        font-family: Roboto Slab;
        font-size: 30px;
        font-style: normal;
        line-height: normal;
        font-weight: bold;
        color: #000225;
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
      }
    }
  }
`;
