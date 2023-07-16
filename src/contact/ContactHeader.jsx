import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function ContactHeader() {
  return (
    <Container>
      <div className="inner-content">
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <nav>
          <NavLink to="/" className="normal">
            Home
          </NavLink>
          <NavLink to="/aboutus" className="normal">
            About us
          </NavLink>
          <NavLink to="/services" className="normal">
            Services
          </NavLink>
          <NavLink to="/contactus" className="contact-us">
            Contact us
          </NavLink>
        </nav>
        <div className="menu">
          <img src="/images/home images/menu.svg" alt="" />
        </div>
      </div>
    </Container>
  );
}

export default ContactHeader;

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-y: hidden;
  padding: 0.5cm 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  @media (min-width: 320px) and (max-width: 599px) {
    background-color: white;
    margin: 0;
    padding: 0.25cm 0;
  }
  .inner-content {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.25cm;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.07);
      }
      svg {
        color: #000225;
      }
      @media (min-width: 600px) {
        display: none;
      }
    }
    .logo {
      width: 200px;
      height: 54.032px;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 150px;
      }
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
      @media (min-width: 320px) and (max-width: 599px) {
        display: none;
      }

      a {
        text-decoration: none;
        color: #000225;
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
        color: white;
        background-color: #000225;
        &:hover {
          background-color: transparent;
          color: #000225;
          border-color: #000225;
        }
      }
    }
  }
`;
