import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
//data
import { MovieState } from "../movieState";
//framer motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../Components/ScrollTop";

const WorkDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieIdx = movies.findIndex((StateMovie) => StateMovie.url === url);
    setMovie(movies[movieIdx]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <StyledDetailDiv
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyledHeadlineDiv>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </StyledHeadlineDiv>
          <StyledAwardsDiv>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwardsDiv>
          <StyledImageDiv>
            <img src={movie.secondaryImg} alt="movie" />
          </StyledImageDiv>
          <ScrollTop />
        </StyledDetailDiv>
      )}
    </>
  );
};
//styling
const StyledDetailDiv = styled(motion.div)`
  color: white;
  @media (max-width: 1360px) {
    padding: 0rem 2rem;
  }
`;
const StyledHeadlineDiv = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1360px) {
    h2 {
      font-size: 3rem;
    }
  }
`;
const StyledAwardsDiv = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1360px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const StyledAwardDiv = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.5rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const StyledImageDiv = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  @media (max-width: 1360px) {
    img {
      object-fit: unset;
      height: fit-content;
    }
  }
`;
//Award Component
const Award = ({ title, description }) => {
  return (
    <StyledAwardDiv>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAwardDiv>
  );
};
export default WorkDetail;
