import React from "react";
import styled from "styled-components";
import "./login.css";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="./image/cta-logo-one.svg"></CTALogoOne>
          <Button>GET ALL THERE</Button>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            unde veniam quia consectetur modi, illum eum culpa, fugit totam
            labore facilis enim maiores odit eius?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Aspernatur enim praesentium fugiat
            illum quod voluptates est possimus ipsum, modi sit repudiandae ea
            repellat culpa ratione!
          </Description>
          <CTALogoTwo src="./image/cta-logo-two.png"></CTALogoTwo>
        </CTA>
        <BackgroundImg />
      </Content>
    </Container>
  );
};

export default Login;

const Description = styled.p`
  color: hsla(0, 01, 95.31, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5em;
  letter-spacing: 1.5px;
`;

const Button = styled.a`
  margin-top: 8px;
  cursor: pointer;
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 10px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const BackgroundImg = styled.div`
  background-image: url(./image/login-background.jpg);
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Content = styled.div`
  margin-bottom: 10px;
  width: 100%;
  position: relative;
  display: flex;

  justify-content: center;
  align-item: center;
  min-height: 100vh;
  box-sizing: border-box;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-item: center;
  height: 100vh;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin-right: auto;
  margin-left: auto;
`;

const CTALogoOne = styled.img`
margin-bottom= 12px
max-width: 300px;
min-height 1px;
display:block;
width:100%`;

const CTALogoTwo = styled.img`
margin-top= 12px
max-width: 300px;
min-height 1px;
display:block;
width:100%`;
