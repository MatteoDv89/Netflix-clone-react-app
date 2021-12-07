import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import News from "./News";
import Discovery from "./Discovery";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <News />
      <Discovery />
    </Container>
  );
};

const Container = styled.main`
  position: relative;

  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 60px;
  box-sizing: border-box;
  margin-left: -8px;
  margin-right: -8px;

  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("image/home-background.png") center center / cover fixed;
    content: "";
    position: absolute;
    left: 0;
    inset: 0px;
    z-index: -1;
  }
`;

export default Home;
