import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function TopHeader() {
  return (
    <HeaderContainer>
      <div className="logo">
        <img src="../assets/images/logo.svg" alt="logo" />
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
    </HeaderContainer>
  );
}

export default TopHeader;

const HeaderContainer = styled.header``;
