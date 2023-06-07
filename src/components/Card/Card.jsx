import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { SCardContainer, STitle, SImage, SP, SImgContainer, SCardMotion } from "./StyleCard";
import { cardView } from "../../helpers/cardView";
import { ICard } from "../../interfaces/interfaces";
import { getSingleGame } from "../../helpers/api";

const Card: React.FC<ICard> = ({ id, name, released, rating, background_image }) => {
  // const [dataId, setDataId] = useState();

  //*async/await
  //   try {
  //     const response = await getSingleGame(id);
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }

  return (
    <AnimatePresence>
      <SCardMotion initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 1 }}>
        <SCardContainer to={`${id}`}>
          <STitle>{name}</STitle>
          <SP>Released: {cardView(`${released}`)}</SP>
          <SP>Rating: {rating}</SP>
          <SImgContainer>
            {background_image ? <SImage src={background_image} alt="game image" /> : "no image"}
          </SImgContainer>
        </SCardContainer>
      </SCardMotion>
    </AnimatePresence>
  );
};

export { Card };
