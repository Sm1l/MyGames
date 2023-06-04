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
    "tags tags"
    "screenshot screenshot"
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
`;

export const STags = styled(SPLeft)`
  grid-area: tags;
`;

export const SLink = styled(Link)`
  text-align: right;
  grid-area: back;
`;
export const SScreenshotContainer = styled.div`
  grid-area: screenshot;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  /* display: grid; */
  /* grid-template-rows: auto; */
  /* grid-template-columns: repeat(2, 1fr); */
  /* grid-template-columns: repeat(3, 250px); */
  /* grid-template-rows: auto; */
`;

export const SImgContainer = styled.div`
  grid-area: image;
  position: relative;
  padding-bottom: 80%;
  width: 100%;
  height: 100%;
`;

export const SImgScreenshotsContainer = styled.div`
  position: relative;
  padding-bottom: 10%;
  width: 100%;
  height: 100%;
  flex: 1 48%;
`;

export const SImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
