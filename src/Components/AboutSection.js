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
//import framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <StyledAboutDiv>
      <StyledDescriptionDiv>
        <motion.div>
          <StyledHideDiv>
            <motion.h2>We work to make</motion.h2>
          </StyledHideDiv>
          <StyledHideDiv>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHideDiv>
          <StyledHideDiv>
            <motion.h2>true.</motion.h2>
          </StyledHideDiv>
        </motion.div>
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
