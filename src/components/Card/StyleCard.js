import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SCardContainer = styled(Link)`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 1fr minmax(15px, auto) minmax(15px, auto) auto;
  grid-template-columns: 1fr;
  gap: 10px;
  padding: 10px;
  overflow: hidden;
  /* border: 1px solid var(--color-white); */
  border-radius: 10px;
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

export const STitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;
export const SP = styled.p``;
export const SImgContainer = styled.div`
  position: relative;
  padding-bottom: 80%;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
`;

export const SImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
