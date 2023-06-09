import React from "react";
import { Route, Routes } from "react-router-dom";

import { SAppContainer } from "./stylesApp";

import { MainPage } from "../../pages/MainPage";
import { CardPage } from "../../pages/CardPage";

const App: React.FC = () => {
  return (
    <SAppContainer>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path=":id" element={<CardPage />} />
      </Routes>
    </SAppContainer>
  );
};

export { App };
