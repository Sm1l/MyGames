import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SContainer = styled.main`
  display: grid;
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
    "- back";

  padding: 30px;
  width: 100%;
  gap: 20px;
  max-width: 1440px;
  min-height: 100vh;
`;

export const STitle = styled.h3`
  grid-area: title;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
`;
const SPLeft = styled.p``;
const SPRight = styled(SPLeft)`
  text-align: right;
`;
export const SRating = styled(SPLeft)`
  grid-area: rating;
  font-size: 18px;
`;
export const SReleased = styled(SPRight)`
  grid-area: released;
  font-size: 18px;
`;
export const SPlatforms = styled(SPRight)`
  grid-area: platforms;
  font-size: 18px;
`;
export const SGenres = styled(SPLeft)`
  grid-area: genres;
  font-size: 18px;
`;
export const SDescription = styled(SPLeft)`
  grid-area: description;
  font-size: 18px;
  line-height: 150%;
`;

export const STags = styled(SPLeft)`
  grid-area: tags;
`;

export const SLink = styled(Link)`
  text-align: right;
  grid-area: back;
  align-self: flex-end;
  align-items: flex-end;
  @media (min-width: 960px) {
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
export const SScreenshotContainer = styled.div`
  grid-area: screenshot;
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
`;

export const SImgContainer = styled.div`
  grid-area: image;
  position: relative;
  padding-bottom: 80%;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 2px 2px 6px 3px rgba(255, 255, 255, 0.4);
`;

export const SImgScreenshotsContainer = styled(Link)`
  display: flex;
  position: relative;
  padding-bottom: 30%;
  flex: 1 48%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 2px 6px 3px rgba(255, 255, 255, 0.4);
  transition: transform 300ms, box-shadow 300ms;

  @media (min-width: 960px) {
    &:hover,
    &:focus {
      box-shadow: 6px 6px 14px 4px rgba(255, 255, 255, 0.5);
      transition: transform 300ms, box-shadow 300ms;
      transform: translateX(-4px) translateY(-4px);
    }
  }
`;

export const SImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
