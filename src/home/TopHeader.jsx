import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function TopHeader() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <HeaderContainer show={menu}>
      <div className="inner-content">
        <div className="logo" onClick={() => navigate("/")}>
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
        <div className="menu" onClick={() => setMenu(true)}>
          <img src="/images/home images/menu.svg" alt="" />
        </div>
      </div>
      <div show={menu} className="backdrop" onClick={() => setMenu(false)} />

      <HamburgerMenu show={menu}>
        <div className="content">
          <div className="icons">
            <AiOutlineClose onClick={() => setMenu(false)} />
          </div>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutus">About us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contactus">Contact us</NavLink>
            <h1>Follow us</h1>
            <a className="social-media" href="">
              <p>Facebook</p>
              <GoLinkExternal />
            </a>
            <a className="social-media" href="">
              <p>Instagram</p>
              <GoLinkExternal />
            </a>
            <a className="social-media" href="">
              <p>Twitter</p>
              <GoLinkExternal />
            </a>
            <a className="social-media" href="">
              <p>Linkedin</p>
              <GoLinkExternal />
            </a>
          </div>
        </div>
      </HamburgerMenu>
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
  @media (min-width: 320px) and (max-width: 599px) {
    background-color: white;
    position: relative;
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
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: ${(props) => (props.show ? 5 : 0)};
    display: ${(props) => (props.show ? "block" : "none")};
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const HamburgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 60%;
  background-color: white;
  z-index: ${(props) => (props.show ? 10 : 0)};
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  padding: 1cm;
  .content {
    .icons {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      svg {
        padding: 0.1cm;
        width: 48px;
        height: 48px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }
      }
    }
    .links {
      display: flex;
      flex-direction: column;
      margin-top: 1cm;
      gap: 5px;
      a {
        text-decoration: none;
        font-size: 24px;
        color: black;
        &:hover {
          font-weight: bold;
        }
      }
      h1 {
        border-bottom: 1px solid black;
        margin-top: 0.5cm;
        padding-bottom: 0.15cm;
        font-size: 22px;
      }
      .social-media {
        display: flex;
        align-items: center;
        font-size: 18px;
        gap: 10px;
      }
    }
  }
`;
