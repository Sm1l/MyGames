import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
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
  SCardMotion,
} from "./stylesCardPage";

import { cardView } from "../../helpers/cardView";
import { choosePlatform } from "../../helpers/platforms";
import { getScreenshots, getSingleGame } from "../../helpers/api";
import { cardPageVariants } from "./animationCardPage";
import { ICardFull, IScreenshot } from "./interfacesCardPage";

const CardPage: React.FC = () => {
  const { id } = useParams();
  const [singleCard, setSingleCard] = useState<ICardFull>();
  const [screenshots, setScreenshots] = useState<IScreenshot[]>([]);
  const [singleScreenshot, setSingleScreenshot] = useState<string>("");
  const [modalIsActive, setModalIsActive] = useState<boolean>(false);

  // const name: string | undefined = singleCard?.name;
  // const genres: IGenre[] | undefined = singleCard?.genres;
  // const description_raw: string | undefined = singleCard?.description_raw;
  // const rating: number | undefined = singleCard?.rating;
  // const released: string | undefined = singleCard?.released;
  // const background_image: string | undefined = singleCard?.background_image;
  // const parent_platforms = singleCard?.parent_platforms;
  // const tags = singleCard?.tags;

  // const {
  //   name,
  //   genres,
  //   description_raw,
  //   rating,
  //   released,
  //   background_image,
  //   parent_platforms,
  //   tags,
  // }: ICardFull | undefined = singleCard;

  //jsx const { name, genres, description_raw, rating, released, background_image, parent_platforms, tags } = singleCard;
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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
  // console.log("singleCard:", singleCard);

  const screenshotHandleClick = (src: string) => {
    setModalIsActive(true);
    setSingleScreenshot(src);
  };

  if (singleCard == null) return null;

  const { name, genres, description_raw, rating, released, background_image, parent_platforms, tags } = singleCard;

  return (
    <>
      <SContainer>
        <STitle
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={cardPageVariants}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0, once: true }}
        >
          {name}
        </STitle>
        <SRating
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={cardPageVariants}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0, once: true }}
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
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={cardPageVariants}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0, once: true }}
        >
          Released: {cardView(`${released}`)}
        </SReleased>
        <SGenres
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={cardPageVariants}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0, once: true }}
        >
          Genres: {!!genres?.length && genres.map((genre) => <span key={genre.id}>{genre.slug} </span>)}
        </SGenres>
        <SPlatforms
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={cardPageVariants}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0, once: true }}
        >
          Platforms:
          {!!parent_platforms?.length &&
            parent_platforms.map((item) => <span key={item.platform.id}>{choosePlatform(item.platform.name)}</span>)}
        </SPlatforms>
        <SImgContainer
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={cardPageVariants}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0, once: true }}
        >
          {background_image ? <SImage src={background_image} alt="game image" /> : "no image"}
        </SImgContainer>
        <SDescription
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={cardPageVariants}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0, once: true }}
        >
          {description_raw}
        </SDescription>
        <SScreenshotContainer>
          {!!screenshots?.length &&
            screenshots.map((item: IScreenshot) => (
              <SCardMotion
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ amount: 0, once: true }}
                variants={cardPageVariants}
                transition={{ duration: 0.5 }}
                key={item.id}
              >
                <SImgScreenshotContainer to={""} onClick={() => screenshotHandleClick(item.image)}>
                  <SImage src={item.image} alt="screenshot" />
                </SImgScreenshotContainer>
              </SCardMotion>
            ))}
        </SScreenshotContainer>
        {tags != null && (
          <STags
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ amount: 0, once: true }}
            variants={cardPageVariants}
            transition={{ duration: 0.5 }}
          >
            Tags:
            {tags.map((tag) => (
              <span key={tag.slug}>{`#${tag.slug}`} </span>
            ))}
          </STags>
        )}
        <SLinkContainer
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={cardPageVariants}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0, once: true }}
        >
          <SLink to="/">Back</SLink>
        </SLinkContainer>
      </SContainer>
      <ModalScreenshot
        modalIsActive={modalIsActive}
        setModalIsActive={setModalIsActive}
        singleScreenshot={singleScreenshot}
      />
    </>
  );
};

export { CardPage };
