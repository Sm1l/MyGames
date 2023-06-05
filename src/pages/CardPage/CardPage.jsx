import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

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
  SImgScreenshotsContainer,
} from "./stylesCardPage";
import { cardView } from "../../helpers/cardView";
import { choosePlatform } from "../../helpers/platforms";
import { getScreenshots, getSingleGame } from "../../helpers/api";
import { ModalScreenshot } from "../../ModalScreenshot";

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
      <SContainer>
        <STitle>{name}</STitle>
        <SRating>Rating: {rating}</SRating>
        <SReleased>Released: {cardView(`${released}`)}</SReleased>
        <SGenres>Genres: {genres && genres.map((genre) => <span key={genre.slug}>{genre.slug} </span>)}</SGenres>
        <SPlatforms>
          Platforms:
          {parent_platforms && parent_platforms.map((item) => choosePlatform(item.platform.name))}
          {/* // parent_platforms.map((platform) => <span key={platform.platform.name}>{platform.platform.name} </span>)} */}
        </SPlatforms>
        <SImgContainer>
          {background_image ? <SImage src={background_image} alt="game image" /> : "no image"}
        </SImgContainer>
        <SDescription> {description_raw}</SDescription>
        <SScreenshotContainer>
          {screenshots &&
            screenshots.map((item) => (
              <SImgScreenshotsContainer key={item.id} onClick={() => screenshotHandleClick(item.image)}>
                <SImage src={item.image} alt="screenshot" />
              </SImgScreenshotsContainer>
            ))}
        </SScreenshotContainer>
        {!!tags?.length && (
          <STags>
            Tags:
            {tags.map((tag) => (
              <span key={tag.slug}>{`#${tag.slug}`} </span>
            ))}
          </STags>
        )}
        <SLinkContainer>
          <SLink to="/">Back</SLink>
        </SLinkContainer>
      </SContainer>
      {modalIsActive && (
        <ModalScreenshot
          modalIsActive={modalIsActive}
          setModalIsActive={setModalIsActive}
          singleScreenshot={singleScreenshot}
        />
      )}
    </>
  );
};

export { CardPage };
