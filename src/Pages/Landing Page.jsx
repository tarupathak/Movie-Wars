import React from "react";
import styled from "styled-components";
import Banner from "../Components/Banner";
import DownloadNow from "../Components/DownloadNow";
import Stream from "../Components/Stream";
import GroupWatch from "../Components/GroupWatch";
import MarvelStudio from "../Components/MarvelStudio";

const LandingPage = () => {
  return (
    <div>
      <Main>
        <Banner />
        <Stream />
        <DownloadNow />
        <GroupWatch />
        <MarvelStudio />
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
