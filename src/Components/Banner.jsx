import React from "react";
import styled from "styled-components";
import logo2 from "../Images/cta-logo-two.png";
import bgImg from '../Images/movie-background-collage.jpg'

function Banner() {

   
  return (
    <>
      <Background>
        <Container>
          <Content>
          <p>Movie Wars</p>
            <button type="button" className="get-bundle-btn">
              Get the Movie Wars Bundle
            </button>
            <h4>Stream Now: Terms Apply</h4>
            <img src={logo2} alt="logo/img" />
            <button type="button" className="links">
              Sign Up for Movie Wars Only
            </button>
            <button type="button" className="links text-gary">
              $7.99/month or $79.99/year
            </button>
          </Content>
        </Container>
      </Background>
    </>
  );
}

const Background = styled.section`
  background-image: url(${bgImg});
  height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    height: 100vh;
  }

  @media screen and (min-width: 280px) and (max-width: 767px) {
    height: 100vh;
  }

`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h4 {
    margin-bottom: 1vh;
    color: #fff;
  }
  img {
    width: 100%;
    height: auto;
    margin: 0 auto;
    object-fit: contain;
    max-width: 600px;
    display: block;
    margin-bottom: 1vh;
  }
  p {
    color: white;
    font-size: 12vh;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

    @media screen and (min-width: 768px) and (max-width: 1200px) {
   
        font-size: 10vh;
    
  }

  @media screen and (min-width: 280px) and (max-width: 767px) {
        font-size: 6vh;
    
  }
}

  

  > .get-bundle-btn {
    outline:none;
    border: none;
    padding: 11.5px 15px;
    width: 100%;
    align-items: center;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: #0063e5;
    color: #f9f9f9;
    font-size: 18px;
    border-radius: 0.345rem;
    transition: all 0.7s ease-in-out;

    &:hover {
        background: #0085ff;
    }

    
  @media screen and (min-width: 550px) and (max-width: 1200px) {
    padding: 10px 0;
    font-size: 15px;
  }

  @media screen and (min-width: 280px) and (max-width: 550px) {
    padding:5px 0;
    font-size: 14px;
  }

  }

  > .links {
    outline: none;
    border: none;
    font-size: 14px;
    background: transparent;
    color: #f9f9f9;
    margin-top: 1vh;
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    max-width: 550px;
  }

  @media screen and (min-width: 550px) and (max-width: 767px) {
    max-width: 450px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 375px) and (max-width: 550px) {
    max-width: 350px;
    margin-top: 13vh;
  }

  
  @media screen and (min-width: 280px) and (max-width: 375px) {
    max-width: auto;
    margin-top: 13vh;
  }

  > .text-gary {
    color: grey;
  }

  
`;

export default Banner;
