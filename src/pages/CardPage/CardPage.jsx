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
  SImgScreenshotsContainer,
} from "./stylesCardPage";
import { cardView } from "../../helpers/cardView";
import { getScreenshots, getSingleGame } from "../../helpers/api";
import { IFullCard } from "./interfacesCardPage";

// const CardPage: React.FC<CardPageProps> = ({
const CardPage: React.FC = () => {
  const { id } = useParams();
  const [singleCard, setSingleCard] = useState({});
  const [screenshots, setScreenshots] = useState([]);
  // console.log(id);
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
  console.log(screenshots);

  return (
    <SContainer>
      <STitle>{name}</STitle>
      <SRating>Rating: {rating}</SRating>
      <SReleased>Released: {cardView(`${released}`)}</SReleased>
      <SGenres>Genres: {genres && genres.map((genre) => <span key={genre.slug}>{genre.slug} </span>)}</SGenres>
      <SPlatforms>
        Platforms:
        {parent_platforms &&
          parent_platforms.map((platform) => <span key={platform.platform.name}>{platform.platform.name} </span>)}
      </SPlatforms>
      <SImgContainer>
        {background_image ? <SImage src={background_image} alt="game image" /> : "no image"}
      </SImgContainer>
      <SDescription> {description_raw}</SDescription>
      <STags>Tags: {tags && tags.map((tag) => <span key={tag.slug}>{`#${tag.slug}`} </span>)}</STags>
      <SScreenshotContainer>
        {screenshots &&
          screenshots.map((item) => (
            <SImgScreenshotsContainer key={item.id}>
              <SImage src={item.image} alt="screenshot" />
            </SImgScreenshotsContainer>
          ))}
      </SScreenshotContainer>
      <SLink to="/">Back</SLink>
    </SContainer>
  );
};

export { CardPage };
