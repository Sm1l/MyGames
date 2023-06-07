import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const STitle = styled.h2`
  text-align: center;
  font-size: 28px;
  line-height: 110%;
`;

export const SCardsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const SP = styled.p``;
