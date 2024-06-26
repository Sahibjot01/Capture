import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//framer motion
import { motion } from "framer-motion";
//useScroll
import { useScroll } from "../Components/useScroll";
import ScrollTop from "../Components/ScrollTop";

import {
  pageAnimation,
  fadeAnimation,
  photoAnimation,
  lineAnimation,
  sliderAnimation,
  sliderContainer,
} from "../animation";

const OurWork = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <StyledWorkDiv
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={sliderAnimation}></Frame1>
        <Frame2 variants={sliderAnimation}></Frame2>
        <Frame3 variants={sliderAnimation}></Frame3>
        <Frame4 variants={sliderAnimation}></Frame4>
      </motion.div>
      <StyledMovieDiv>
        <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHideDiv>
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </StyledHideDiv>
        </Link>
      </StyledMovieDiv>
      <StyledMovieDiv
        ref={element1}
        animate={controls1}
        variants={fadeAnimation}
        initial="hidden"
      >
        <h2>Racer</h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="racer" />
        </Link>
      </StyledMovieDiv>
      <StyledMovieDiv
        ref={element2}
        animate={controls2}
        variants={fadeAnimation}
        initial="hidden"
      >
        <h2>Good times</h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </StyledMovieDiv>
      <ScrollTop />
    </StyledWorkDiv>
  );
};

//styling
const StyledWorkDiv = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: #fff;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1360px) {
    padding: 2rem 2rem;
  }
`;

const StyledMovieDiv = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const StyledHideDiv = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
