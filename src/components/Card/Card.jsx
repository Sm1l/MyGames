import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SCardContainer, STitle, SImage, SP, SImgContainer } from "./StyleCard";
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
    // <SCardContainer tabIndex={0} onClick={() => cardHandleClick(id)}>
    <SCardContainer tabIndex={0}>
      <Link to={`${id}`}>
        <STitle>{name}</STitle>
        <SP>Released: {cardView(`${released}`)}</SP>
        <SP>Rating: {rating}</SP>
        <SImgContainer>
          {background_image ? <SImage src={background_image} alt="game image" /> : "no image"}
        </SImgContainer>
      </Link>
    </SCardContainer>
  );
};

export { Card };
