import React, { useEffect } from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//styled component
import {
  StyledAboutDiv,
  StyledDescriptionDiv,
  StyledHideDiv,
  StyledImageDiv,
} from "../styles";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { fadeAnimation, scrollReveal } from "../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledServicesDiv
      animate={controls}
      initial="hidden"
      variants={fadeAnimation}
      ref={element}
    >
      <StyledDescriptionDiv>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCardsDiv>
          <StyledCardDiv>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCardDiv>

          <StyledCardDiv>
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCardDiv>

          <StyledCardDiv>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCardDiv>

          <StyledCardDiv>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCardDiv>
        </StyledCardsDiv>
      </StyledDescriptionDiv>
      <StyledImageDiv>
        <img src={home2} alt="Professional camera shooting" />
      </StyledImageDiv>
    </StyledServicesDiv>
  );
};

const StyledServicesDiv = styled(StyledAboutDiv)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem;
  }
  @media (max-width: 1360px) {
    display: block;
  }
`;

const StyledCardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1360px) {
    justify-content: center;
  }
`;

const StyledCardDiv = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
    @media (max-width: 1360px) {
      justify-content: center;
    }
  }
`;

export default ServicesSection;
