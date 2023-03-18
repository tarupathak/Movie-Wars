import React from "react";
import styled from "styled-components";
import bgImg from "../Images/Soul_Groupwatch.jpg";

const GroupWatch = () => {
  return (
    <>
      <Section>
        <Container>
          <Content>
            <h1>Virtual Movie Nights with</h1>
            <h1>GroupWatch</h1>
            <li>Watch together, even when apart</li>
            <li>Stream with up to 10 friends</li>
            <li>Pause,rewind,react together</li>
            <li>Easy setup and sharing</li>
          </Content>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  background: url(${bgImg}) center/cover no-repeat;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    height: 61vh;
  }

  @media screen and (min-width: 280px) and (max-width: 767px) {
    height: 55vh;
  }
`;

const Container = styled.div`
  width: 91%;
  margin: 0 auto;

  @media screen and (min-width: 280px) and (max-width: 991px) {
    width: 85%;
  }
`;

const Content = styled.div`
  margin-top: 17vh;

  @media screen and (min-width: 280px) and (max-width: 1200px) {
    margin-top:13vh;
  }
  

  li {
    fontsize: 1rem;
    font-weight: 300;

    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.75rem;
    }
  }
`;

export default GroupWatch;
