import React from "react";
import styled from "styled-components";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <div className="top">
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="special-links">
          <h1>Useful Links</h1>
          <span>
            <Link className="page-link" to="/">
              Home
            </Link>
            <GoLinkExternal />
          </span>
          <span>
            <Link className="page-link" to="/aboutus">
              About us
            </Link>
            <GoLinkExternal />
          </span>
          <span>
            <Link className="page-link" to="/services">
              Services
            </Link>
            <GoLinkExternal />
          </span>
          <span>
            <Link className="page-link" to="/contactus">
              Contact us
            </Link>
            <GoLinkExternal />
          </span>
        </div>
        <div className="social-links">
          <h1>Follow us</h1>
          <span>
            <a className="page-link" href="/">
              Facebook
            </a>
            <GoLinkExternal />
          </span>
          <span>
            <a className="page-link" href="/">
              Twitter
            </a>
            <GoLinkExternal />
          </span>
          <span>
            <a className="page-link" href="/">
              Instagram
            </a>
            <GoLinkExternal />
          </span>
          <span>
            <a className="page-link" href="/">
              Linkedin
            </a>
            <GoLinkExternal />
          </span>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright&copy;DK Group 2023 </p>
      </div>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  display: flex;
  width: 100%;
  padding: 2cm 1cm;
  flex-direction: column;
  align-items: center;
  gap: 0.5cm;
  background: #fff;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.3),
    0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  @media (min-width: 320px) and (max-width: 599px) {
    padding: 0;
    padding: 1cm 1cm;
  }
  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1cm;

    @media (min-width: 320px) and (max-width: 599px) {
      flex-direction: column;
      align-items: center;
    }

    .special-links,
    .social-links {
      display: flex;
      flex-direction: column;
      h1 {
        color: #000225;
        font-family: Roboto Slab;
        font-size: 24px;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        padding-bottom: 0.15cm;
        border-bottom: 2px solid black;
        width: 70%;
        margin-bottom: 0.5cm;
      }
      span {
        display: flex;
        align-items: center;
        gap: 0.5cm;
        margin-bottom: 5px;
        .page-link {
          text-decoration: none;
          color: #000225;
          font-family: Roboto Slab;
          font-size: 20px;
          font-style: normal;
          line-height: normal;
          &:hover {
            font-weight: bold;
            text-decoration: underline;
          }
        }
      }
    }
    .logo {
      width: 25%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 80%;
      }
    }
    .special-links {
      width: 25%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 80%;
      }
    }
    .social-links {
      width: 25%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 80%;
      }
    }
  }
`;
