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
import { titleAnimation, fadeAnimation, photoAnimation } from "../animation";

const AboutSection = () => {
  return (
    <StyledAboutDiv>
      <StyledDescriptionDiv>
        <motion.div>
          <StyledHideDiv>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHideDiv>
          <StyledHideDiv>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHideDiv>
          <StyledHideDiv>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </StyledHideDiv>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Us</motion.button>
      </StyledDescriptionDiv>
      <StyledImageDiv>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with a professional camea"
        />
      </StyledImageDiv>
    </StyledAboutDiv>
  );
};

export default AboutSection;
