import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import { SAppContainer, SGlobal } from "./stylesApp";

import { MainPage } from "../../pages/MainPage";
import { CardPage } from "../../pages/CardPage";

const App: React.FC = () => {
  return (
    <SAppContainer>
      {/* <Link to="/">home</Link>
      <Link to="id">game</Link> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path=":id" element={<CardPage />} />
      </Routes>
    </SAppContainer>
  );
};

export { App };
