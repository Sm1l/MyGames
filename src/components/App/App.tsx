import React from "react";
import { MainPage } from "../../pages/MainPage";

import { SAppContainer } from "./stylesApp";

const App: React.FC = () => {
  return (
    <SAppContainer>
      <MainPage />
    </SAppContainer>
  );
};

export { App };
