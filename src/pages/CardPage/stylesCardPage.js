import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const SContainer = styled(motion.main)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "title"
    "rating"
    "released"
    "genres"
    "platforms"
    "image"
    "description"
    "screenshot"
    "tags"
    "link";

  width: 100%;
  gap: 20px;
  max-width: 1440px;
  min-height: 100vh;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "title title"
      "rating released"
      "genres platforms"
      "image image"
      "description description"
      "screenshot screenshot"
      "tags tags"
      "- link";
  }
`;

export const STitle = styled(motion.h3)`
  grid-area: title;
  font-weight: 500;
  font-size: 28px;
  text-align: center;
  @media (min-width: 800px) {
    font-size: 40px;
  }
`;

export const SRating = styled(motion.div)`
  grid-area: rating;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`;
export const SReleased = styled(motion.p)`
  grid-area: released;
  font-size: 18px;

  @media (min-width: 800px) {
    text-align: right;
  }
`;
export const SPlatforms = styled(motion.div)`
  grid-area: platforms;
  font-size: 18px;
  display: flex;
  gap: 5px;
  align-items: center;

  @media (min-width: 800px) {
    justify-content: flex-end;
  }
`;
export const SGenres = styled(motion.p)`
  grid-area: genres;
  font-size: 18px;
`;
export const SDescription = styled(motion.p)`
  grid-area: description;
  font-size: 18px;
  line-height: 150%;
`;

export const STags = styled(motion.p)`
  grid-area: tags;
`;

export const SLinkContainer = styled(motion.div)`
  grid-area: link;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SLink = styled(Link)`
  @media (min-width: 960px) {
    transition: transform 300ms;
    &:hover,
    &:focus {
      transform: scale(1.2);
      transition: transform 300ms;
    }
  }
`;
export const SScreenshotContainer = styled.div`
  grid-area: screenshot;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    gap: 30px;
  }
`;

export const SImgContainer = styled(motion.div)`
  grid-area: image;
  position: relative;
  padding-bottom: 90%;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: var(--shadow);

  @media (min-width: 800px) {
    padding-bottom: 50%;
  }
`;

export const SImgScreenshotContainer = styled(motion.div)`
  position: relative;
  display: flex;
  padding-bottom: 50%;
  flex: 1 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 300ms, box-shadow 300ms;

  @media (min-width: 640px) {
    flex: 1 46%;
  }

  @media (min-width: 800px) {
    padding-bottom: 30%;
    &:hover,
    &:focus {
      box-shadow: var(--shadow-hover);
      transition: transform 300ms, box-shadow 300ms;
      transform: translateX(-4px) translateY(-4px);
    }
  }
`;
export const SImgScreenshotLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const SImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
