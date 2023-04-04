import React from "react";
import styled from "styled-components";

import img1 from "../Images/viewers-disney.png";
import img2 from "../Images/viewers-pixar.png";
import img3 from "../Images/viewers-marvel.png";
import img4 from "../Images/viewers-starwars.png";
import img5 from "../Images/viewers-national.png";
import img6 from "../Images/DSNY_STAR_LOGO_LIGHT_RGB.png";

import video1 from "../Videos/1564674844-disney.mp4";
import video2 from "../Videos/1564676714-pixar.mp4";
import video3 from "../Videos/1564676115-marvel.mp4";
import video4 from "../Videos/1608229455-star-wars.mp4";
import video5 from "../Videos/1564676296-national-geographic.mp4";
import video6 from "../Videos/star_on_disney2021.mp4";

const Brand = () => {
  return (
    <div>
      <Container>
        <Wrap>
          <img src={img1} alt="img/brand" />
          <video autoplay={true} loop={true} playsInLine={true} muted={true}>
            <source src={video1} type="video/mp4"></source>
          </video>
        </Wrap>
        <Wrap>
          <img src={img2} alt="img/brand" />
          <video autoplay={true} loop={true} playsInLine={true} muted={true}>
            <source src={video2} type="video/mp4"></source>
          </video>
        </Wrap>
        <Wrap>
          <img src={img3} alt="img/brand" />
          <video autoplay={true} loop={true} playsInLine={true} muted={true}>
            <source src={video3} type="video/mp4"></source>
          </video>
        </Wrap>
        <Wrap>
          <img src={img4} alt="img/brand" />
          <video autoplay={true} loop={true} playsInLine={true} muted={true}>
            <source src={video4} type="video/mp4"></source>
          </video>
        </Wrap>
        <Wrap>
          <img src={img5} alt="img/brand" />
          <video autoplay={true} loop={true} playsInLine={true} muted={true}>
            <source src={video5} type="video/mp4"></source>
          </video>
        </Wrap>
        <Wrap>
          <img src={img6} alt="img/brand" />
          <video autoplay={true} loop={true} playsInLine={true} muted={true}>
            <source src={video6} type="video/mp4"></source>
          </video>
        </Wrap>
      </Container>
    </div>
  );
};

const Container = styled.section`
  margin-top: 31px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 15px;
    gap: 15px;
  }

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 11px;
    gap: 11px;
  }
`;

const Wrap = styled.div`
position: relative;
padding-top: 56.25%;
border-radius: 10px;u
cursor: default;
overflow: hidden;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;   
object-position: center;
border: 4px solid rgba(249, 249, 249, 0.1);
 img {
    inset: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    z-index: 1500;
    display: block;
    border-radius: 10px;
    transition: opacity 500ms ease-in-out 0s; 
    position: absolute;
    top: 0;
 }  

 video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    z-index: 0;
    display: block;
    border-radius: 10px;
    position: absolute;
    top: 0;
 }  

 &:hover {
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
              rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  transform: scale(1.05);
  border-color: rgba(249, 249, 249, 0.9);

  video{
    opacity: 1;
    z-index: 2000;
  }
 }   
`;

export default Brand;
