import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function TopHeader() {
  return (
    <TopHeader>
      <div className="logo">
        <img src="../assets/logo.svg" alt="logo" />
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
    </TopHeader>
  );
}

export default TopHeader;

const TopHeader = styled.header``;
