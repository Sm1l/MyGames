import styled from "@emotion/styled";

export const SModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const SImgContainer = styled.div`
  position: relative;
  padding-bottom: 40%;
  width: 80%;
  max-height: 60%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: var(--shadow);
`;

export const SImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
