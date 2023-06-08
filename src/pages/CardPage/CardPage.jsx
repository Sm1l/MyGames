import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import StarRatings from "react-star-ratings";

import { ModalScreenshot } from "../../ModalScreenshot";

import {
  SContainer,
  SImage,
  STitle,
  SImgContainer,
  SGenres,
  SRating,
  SReleased,
  SPlatforms,
  SDescription,
  STags,
  SLink,
  SScreenshotContainer,
  SLinkContainer,
  SImgScreenshotContainer,
  SImgScreenshotLink,
} from "./stylesCardPage";

import { cardView } from "../../helpers/cardView";
import { choosePlatform } from "../../helpers/platforms";
import { getScreenshots, getSingleGame } from "../../helpers/api";
import { cardPageVariants } from "./animationCardPage";

// const CardPage: React.FC<CardPageProps> = ({
const CardPage: React.FC = () => {
  const { id } = useParams();
  const [singleCard, setSingleCard] = useState({});
  const [screenshots, setScreenshots] = useState([]);
  const [singleScreenshot, setSingleScreenshot] = useState("");
  const [modalIsActive, setModalIsActive] = useState(false);
  const {
    name,
    genres,
    description_raw,
    rating,
    released,
    background_image,
    parent_platforms,
    short_screenshots,
    tags,
  } = singleCard;

  useEffect(() => {
    if (id) {
      getSingleGame(id)
        .then((res) => {
          setSingleCard(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getScreenshots(id)
        .then((res) => {
          setScreenshots(res.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);
  // console.log("screenshots:", screenshots);
  console.log("singleCard:", singleCard);

  const screenshotHandleClick = (src) => {
    setModalIsActive(true);
    setSingleScreenshot(src);
  };

  return (
    <>
      <AnimatePresence>
        <SContainer>
          <STitle
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={cardPageVariants}
            transition={{ duration: 1 }}
          >
            {name}
          </STitle>
          <SRating
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={cardPageVariants}
            transition={{ duration: 1 }}
          >
            Rating: {rating}
            <StarRatings
              rating={rating}
              starEmptyColor="var(--color-light-grey)"
              starRatedColor="var(--color-white)"
              numberOfStars={5}
              name="rating"
              starDimension="25px"
              starSpacing="3px"
            ></StarRatings>
          </SRating>
          <SReleased
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={cardPageVariants}
            transition={{ duration: 1 }}
          >
            Released: {cardView(`${released}`)}
          </SReleased>
          <SGenres
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={cardPageVariants}
            transition={{ duration: 1 }}
          >
            Genres: {genres && genres.map((genre) => <span key={genre.slug}>{genre.slug} </span>)}
          </SGenres>
          <SPlatforms
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={cardPageVariants}
            transition={{ duration: 1 }}
          >
            Platforms:
            {parent_platforms && parent_platforms.map((item) => choosePlatform(item.platform.name))}
            {/* // parent_platforms.map((platform) => <span key={platform.platform.name}>{platform.platform.name} </span>)} */}
          </SPlatforms>
          <SImgContainer
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={cardPageVariants}
            transition={{ duration: 1 }}
          >
            {background_image ? <SImage src={background_image} alt="game image" /> : "no image"}
          </SImgContainer>
          <SDescription
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={cardPageVariants}
            transition={{ duration: 1 }}
          >
            {description_raw}
          </SDescription>
          <SScreenshotContainer>
            {screenshots &&
              screenshots.map((item) => (
                <SImgScreenshotContainer
                  initial={"hidden"}
                  animate={"visible"}
                  exit={"hidden"}
                  variants={cardPageVariants}
                  transition={{ duration: 1 }}
                  key={item.id}
                >
                  <SImgScreenshotLink onClick={() => screenshotHandleClick(item.image)}>
                    <SImage src={item.image} alt="screenshot" />
                  </SImgScreenshotLink>
                </SImgScreenshotContainer>
              ))}
          </SScreenshotContainer>
          {!!tags?.length && (
            <STags
              initial={"hidden"}
              animate={"visible"}
              exit={"hidden"}
              variants={cardPageVariants}
              transition={{ duration: 1 }}
            >
              Tags:
              {tags.map((tag) => (
                <span key={tag.slug}>{`#${tag.slug}`} </span>
              ))}
            </STags>
          )}
          <SLinkContainer
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={cardPageVariants}
            transition={{ duration: 1 }}
          >
            <SLink to="/">Back</SLink>
          </SLinkContainer>
        </SContainer>
        <ModalScreenshot
          modalIsActive={modalIsActive}
          setModalIsActive={setModalIsActive}
          singleScreenshot={singleScreenshot}
        />
      </AnimatePresence>
    </>
  );
};

export { CardPage };
