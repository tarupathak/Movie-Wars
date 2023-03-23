import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../Images/slide1.jpg';
import slide2 from '../Images/slide2.jpg';
import slide3 from '../Images/slide3.jpg';
import slide4 from '../Images/slide4.jpg';
import slide5 from '../Images/slide5.jpg';
import slide6 from '../Images/slide6.jpg';
import slide7 from '../Images/slide7.jpg';

const Corousal = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div>
      <CarsouselImg {...settings}>
        <Wrap>
          <div><img src={slide1} alt="img" /></div>
        </Wrap>
        <Wrap>
          <div><img src={slide2} alt="img" /></div>
        </Wrap>
        <Wrap>
          <div><img src={slide3} alt="img" /></div>
        </Wrap>
        <Wrap>
          <div><img src={slide4} alt="img" /></div>
        </Wrap>
        <Wrap>
          <div><img src={slide5} alt="img" /></div>
        </Wrap>
        <Wrap>
          <div><img src={slide6} alt="img" /></div>
        </Wrap>
        <Wrap>
          <div><img src={slide7} alt="img" /></div>
        </Wrap>
      </CarsouselImg>
    </div>
  )
}

const CarsouselImg = styled(Slider)`
ul li button {
  &::before{
    font-size: 11px;
    color: rgb(150,158,171);
  }
}
ul li.slick-active button{
  &::before{
    color: white !important;
  }
}
& > button{
  opacity: 1;
  z-index: 1500;
  width: 5vw;
  height: 100%;

  &:hover{
    opacity: 1;
    z-index: 2000;
    transition: opacity 0.2s ease 0s;
  }
}

.slick-prev{
  left: -75px;
}

.slick-next{
  rigth: -75px;
}

.slick-list{
  overflow: initial !important;
}
`;

const Wrap = styled.div`
position: relative;
div{
  border-radius: 4px;
  padding: 4px;
  display: block;
  opacity: 1;
  z-index: 2000;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
              rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: default;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius:4px;
  }
  &:hover{
    padding: 1px;
    border: 4px solid #fff;
    transition-duration: 300ms;
  }
}
`;

export default Corousal