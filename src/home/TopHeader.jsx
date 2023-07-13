import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function TopHeader() {
  return (
    <HeaderContainer>
      <div className="inner-content">
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <nav>
          <NavLink to="/" className="normal">
            Home
          </NavLink>
          <NavLink to="/" className="normal">
            About us
          </NavLink>
          <NavLink to="/" className="normal">
            Services
          </NavLink>
          <NavLink to="/" className="contact-us">
            Contact us
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  );
}

export default TopHeader;

const HeaderContainer = styled.header`
  position: absolute;
  z-index: 3;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  margin-top: 1cm;
  .inner-content {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 200px;
      height: 54.032px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 55%;
      gap: 0px;
      a {
        text-decoration: none;
        color: #fff;
        font-family: Roboto Slab;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        font-weight: bold;
      }
      .contact-us {
        padding: 0.15cm 0.6cm;
        border: 2px solid transparent;
        border-radius: 20px;
        color: #000225;
        background-color: white;
        &:hover {
          background-color: transparent;
          color: white;
          border-color: white;
        }
      }
    }
  }
`;
