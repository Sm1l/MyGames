import React from "react";
import { CardsContainer } from "../CardsContainer/CardsContainer";
import { motion } from "framer-motion";

import { SMainContainer } from "./StyleMainCardsContainer";

const MainCardsContainer: React.FC = () => {
  return (
    <SMainContainer>
      <CardsContainer title="Most popular games" ordering="-popularity" />
      <CardsContainer title="Top rated games" ordering="-rating" />
      <CardsContainer title="New games" ordering="-released" />
    </SMainContainer>
  );
};

export { MainCardsContainer };
