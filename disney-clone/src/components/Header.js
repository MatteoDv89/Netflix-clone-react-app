import React from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "@firebase/auth";

const Header = (props) => {
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <Nav>
      <Logo>
        <img src="./image/logo.svg" alt="" />
      </Logo>
      <Menu>
        <a href="/home">
          <img src="./image/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
      </Menu>
      <Menu>
        <a href="/">
          <img src="./image/search-icon.svg" alt="HOME" />
          <span>SEARCH</span>
        </a>
      </Menu>
      <Menu>
        <a href="/watchlist">
          <img src="./image/watchlist-icon.svg" alt="HOME" />
          <span>WATCHLIST</span>
        </a>
      </Menu>

      <Menu>
        <a href="/movies">
          <img src="./image/movie-icon.svg" alt="HOME" />
          <span>MOVIES</span>
        </a>
      </Menu>
      <Menu>
        <a href="/series">
          <img src="./image/series-icon.svg" alt="HOME" />
          <span>SERIES</span>
        </a>
      </Menu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
};

export default Header;

const Login = styled.a`
  background-color: rgb(0, 0, 0, 0.6);
  padding: 8px 16px;

  cursor: pointer;

  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: 8px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    pointer: cursor;
  }

  img {
    height: 20px;
    width: 20px;
    min-width: 20px;
    z-index: auto;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 18px;
    letter-spacing: 1.42px;
    line-height: 1, 08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;

    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: "";
      height: 3px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      visibility: hidden;
      width: auto;
    }
  }

  &:hover {
    span:before {
      opacity: 1 !important;
      visibility: visible;
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  margin-right: 8px;
  max-heigth: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: flex-start;
  padding: 0 35px;
  letter-spacing: 16px;
  z-index: 3;
  align-items: center;
`;
