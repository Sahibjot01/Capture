import styled from "styled-components";
//framer
import { motion } from "framer-motion";
//use this style to basically define reusabe style for components
export const StyledAboutDiv = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #f5f5f5;
  overflow: hidden;
  @media (max-width: 1360px) {
    display: block;
    text-align: center;
    padding: 2rem 2rem;
  }
`;

export const StyledDescriptionDiv = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1360px) {
    padding: 0;
    button {
      margin: 3rem 0 5rem;
    }
  }
`;

export const StyledImageDiv = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const StyledHideDiv = styled.div`
  overflow-y: hidden;
`;
