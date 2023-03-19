import React from "react";
import Banner from "./Banner";
import styled from "styled-components";
import Stream from "./Stream";
import DownloadNow from "./DownloadNow";
import GroupWatch from "./GroupWatch";
import MarvelStudio from "./MarvelStudio";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Main>
        <Banner />
        <Stream />
        <DownloadNow />
        <GroupWatch />
        <MarvelStudio />
        <Footer />
      </Main>
    </div>
  );
};

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
`;

export default LandingPage;
