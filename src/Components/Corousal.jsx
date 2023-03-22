import React from 'react'
import styled from 'styled-components'
import slide1 from '../Images/slide1.jpg';
import slide2 from '../Images/slide2.jpg';
import slide3 from '../Images/slide3.jpg';
import slide4 from '../Images/slide4.jpg';
import slide5 from '../Images/slide5.jpg';
import slide6 from '../Images/slide6.jpg';
import slide7 from '../Images/slide7.jpg';

const Corousal = () => {
  return (
    <div>
      <CarsouselImg>
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

const CarsouselImg = styled.div``;

const Wrap = styled.div``;

export default Corousal