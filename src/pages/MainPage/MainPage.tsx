import React from "react";

import { SContainer } from "./stylesMainPage";
// import { Search } from "../../components/Search";
import { MainCardsContainer } from "../../components/MainCardsContainer";
import { SearchContainer } from "../../components/SearchContainer";

const MainPage: React.FC = () => {
  return (
    <SContainer>
      <SearchContainer />
      <MainCardsContainer />
      {/* <Search setSearch={setSearch} /> */}
      {/* <MainCardsContainer search={search} /> */}
    </SContainer>
  );
};

export { MainPage };
