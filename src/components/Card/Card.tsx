import React from "react";

import { SCardContainer, STitle, SImage, SP, SImgContainer, SCardMotion } from "./StyleCard";
import { cardView } from "../../helpers/cardView";
import { ICardMini } from "../CardsContainer/interfacesCardsContainer";
import { cardVariants } from "./animationCard";

const Card: React.FC<ICardMini> = ({ id, name, released, rating, background_image }) => {
  //*async/await
  //   try {
  //     const response = await getSingleGame(id);
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }

  return (
    <SCardMotion
      initial={"hidden"}
      whileInView={"visible"}
      exit={"hidden"}
      transition={{ duration: 0.5 }}
      variants={cardVariants}
      viewport={{ amount: 0, once: true }}
    >
      <SCardContainer to={`${id}`}>
        <STitle>{name}</STitle>
        <SP>Released: {cardView(`${released}`)}</SP>
        <SP>Rating: {rating}</SP>
        <SImgContainer>
          {background_image ? <SImage src={background_image} alt="game image" /> : "no image"}
        </SImgContainer>
      </SCardContainer>
    </SCardMotion>
  );
};

export { Card };
