import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "@firebase/auth";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getUser, signOutUser } from "../redux/actions/user.action";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDataName = useSelector((state) => state.user.name);
  const userDataPhoto = useSelector((state) => state.user.photo);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userDataName]);

  const handleAuth = () => {
    if (!userDataName) {
      signInWithPopup(auth, provider)
        .then((result) => setUser(result.user))
        .catch((err) => console.log(err));
    } else if (userDataName) {
      signOut(auth)
        .then(() => {
          unsetUser();
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const unsetUser = () => {
    dispatch(
      signOutUser({
        name: "",
        emai: "",
        photo: "",
      })
    );
  };

  const setUser = (user) => {
    dispatch(
      getUser({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="./image/logo.svg" alt="" />
      </Logo>

      {!userDataName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
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
          <Menu />
          <SignOut>
            <UserImg src={userDataPhoto} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgb(151, 151, 151, 0.34);
  padding: 7px;
  display: flex;
  justify-content: center;

  border-radius: 4px;
  box-shadow: rgb(0 0 0/ 50%) 0px 0px 18px 0px;
  font-size: 14px;
  letter-spacing: 2px;
  width: 100px;
  opacity: 0;
`;

const UserImg = styled.img`
  height: 100%;
  width: 48px;
  border-radius: 50%;
  position: relative;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

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
  min-width: 100px;
  margin-left: 10px;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: 10px;

  a {
    display: flex;
    align-items: center;
    padding: 0 8px;
    pointer: cursor;
  }

  img {
    height: 25px;
    width: 25px;
    min-width: 20px;
    z-index: auto;
    margin-right: 5px;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 18px;
    font-weight: 600;
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
  justify-content: space-between;
  padding: 0 35px;
  letter-spacing: 16px;
  z-index: 3;
  align-items: center;
`;
