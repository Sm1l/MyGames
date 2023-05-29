import React from "react";
import { SCardContainer, STitle, SImage, SP, SImgContainer } from "./StyleCard";
import { cardView } from "../../helpers/cardView";
import { ICard } from "../../interfaces/interfaces";

const Card: React.FC<ICard> = ({ name, released, rating, background_image }) => {
  return (
    <SCardContainer tabIndex={0}>
      <STitle>{name}</STitle>
      <SP>Released: {cardView(`${released}`)}</SP>
      <SP>Rating: {rating}</SP>
      <SImgContainer>
        {background_image ? <SImage src={background_image} alt="game image" /> : "no image"}
      </SImgContainer>
    </SCardContainer>
  );
};

export { Card };
