import React from "react";
import { AnimatePresence } from "framer-motion";

import { SCardContainer, STitle, SImage, SP, SImgContainer, SCardMotion } from "./StyleCard";
import { cardView } from "../../helpers/cardView";
import { ICard } from "../../interfaces/interfaces";
import { cardVariants } from "./animationCard";

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
      <SCardMotion
        initial={"hidden"}
        whileInView={"visible"}
        exit={"hidden"}
        transition={{ duration: 1 }}
        variants={cardVariants}
        viewport={{ amount: 0.1, once: true }}
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
    </AnimatePresence>
  );
};

export { Card };
