import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//framer motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <StyledWorkDiv
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledMovieDiv>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </StyledMovieDiv>
      <StyledMovieDiv>
        <h2>Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="racer" />
        </Link>
      </StyledMovieDiv>
      <StyledMovieDiv>
        <h2>Good times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </StyledMovieDiv>
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
`;

const StyledMovieDiv = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
