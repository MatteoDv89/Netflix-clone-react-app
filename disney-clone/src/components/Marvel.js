import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import isEmpty from "../utils";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Marvel = ({ movies }) => {
  let settings = {
    dots: false,
    infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
  };
  const moviesData = movies.current;

  let marvelArray = [];
  const setMarvelArray = async () => {
    await moviesData.map((movie) => (marvelArray = [...marvelArray, movie]));
  };
  setMarvelArray();

  return (
    <Container>
      <h4>Marvel Selection</h4>

      <Carousel {...settings}>
        {!isEmpty(marvelArray[0]) &&
          marvelArray.map((movie, key) => {
            return (
              <>
                <Wrap key={key}>
                  <Link to={"/details/" + movie.id}>
                    <img src={movie.cardImg} alt="" />
                  </Link>
                </Wrap>
              </>
            );
          })}

        {!isEmpty(marvelArray[0]) &&
          marvelArray.map((movie, key) => {
            return (
              <>
                <Wrap key={key}>
                  <Link to={"/details/" + movie.id}>
                    <img src={movie.cardImg} alt="" />
                  </Link>
                </Wrap>
              </>
            );
          })}
      </Carousel>
    </Container>
  );
};

const Wrap = styled.div`
  height: 200px;

  padding-top: 56%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);
  margin-right: 25px;
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Container = styled.div`
  padding: 0 0 26px`;

const Carousel = styled(Slider)`
  margin-top: 20px;
  margin-right: -26px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 10vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: hidden;
  }
`;

export default Marvel;
