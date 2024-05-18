import React from "react";
import home1 from "../img/home1.png";
//styled component
import {
  StyledAboutDiv,
  StyledDescriptionDiv,
  StyledHideDiv,
  StyledImageDiv,
} from "../styles";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAboutDiv>
      <StyledDescriptionDiv>
        <div className="title">
          <StyledHideDiv>
            <h2>We work to make</h2>
          </StyledHideDiv>
          <StyledHideDiv>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHideDiv>
          <StyledHideDiv>
            <h2>true.</h2>
          </StyledHideDiv>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyledDescriptionDiv>
      <StyledImageDiv>
        <img src={home1} alt="guy with a professional camea" />
      </StyledImageDiv>
    </StyledAboutDiv>
  );
};

export default AboutSection;
