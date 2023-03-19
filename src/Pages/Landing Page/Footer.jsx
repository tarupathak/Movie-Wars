import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Section>
        <Container>
          <Name>
            <p>Movie Wars</p>
          </Name>
          <Navbar>
            <li>
              <p>English</p>
            </li>
            <li>
              <p>Subscriber Agreement</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Your California Privacy</p>
            </li>
            <li>
              <p>Do Not Sell My Info</p>
            </li>
            <li>
              <p>Children's Online Privacy Policy</p>
            </li>
            <li>
              <p>Closed Captioning</p>
            </li>
            <li>
              <p>Interest-Based-Ads</p>
            </li>
            <li>
              <p>Supported Devices</p>
            </li>
            <li>
              <p>Help</p>
            </li>
            <li>
              <p>Gift Movie Wars</p>
            </li>
            <li>
              <p>About Us</p>
            </li>
            <li>
              <p>Movie Wars Partner Program</p>
            </li>
            <li>
              <p>Premier Access</p>
            </li>
            <li>
              <p>The Disney Bundle</p>
            </li>
          </Navbar>
          <Copyright>
            <p>Movie Wars © 2023</p>
          </Copyright>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
 padding: 2rem 0;
  margin-bottom: 0;

  @media screen and (max-width: 550px) {
    padding: 1rem 0;
  }
`;

const Container = styled.div`
width: 95%;
margin 0 auto;
`;

const Name = styled.div`
  font-size: 7vh;
  text-align: center;
  @media screen and (max-width: 550px) {
    font-size: 5vh;
  }
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  flex-grow: initial;
  justify-content: center;

  li {
    list-style: none;

    p {
      padding: 0.5rem;
      font-size: 0.9rem;
      margin-right: 0.3rem;
      @media screen and (max-width: 550px) {
        font-size: 0.75rem;
        padding: 0.1rem;
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  p {
    font-weight: 400 !important;
    margin-top: 3vh;
    @media screen and (max-width: 550px) {
      font-size: 0.95rem;
    }
  }
`;

export default Footer;
