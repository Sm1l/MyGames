import React from "react";

import { SContainer } from "./stylesMainPage";
import { MainCardsContainer } from "../../components/MainCardsContainer";
import { SearchContainer } from "../../components/SearchContainer";

const MainPage: React.FC = () => {
  return (
    <SContainer>
      <SearchContainer />
      <MainCardsContainer />
    </SContainer>
  );
};

export { MainPage };
