import React from "react";
//importing styling
import { StyledHideDiv } from "../styles";
//framer motion
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledContactDiv
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#f5f5f5" }}
    >
      <StyledTitleDiv>
        <StyledHideDiv>
          <motion.h2 variants={titleAnimation}>Get in touch :-</motion.h2>
        </StyledHideDiv>
      </StyledTitleDiv>

      <div>
        <StyledHideDiv>
          <StyledSocialDiv variants={titleAnimation}>
            <StyledCircleDiv />
            <h2>Send Us A Message</h2>
          </StyledSocialDiv>
        </StyledHideDiv>
        <StyledHideDiv>
          <StyledSocialDiv variants={titleAnimation}>
            <StyledCircleDiv />
            <h2>Send an Email</h2>
          </StyledSocialDiv>
        </StyledHideDiv>
        <StyledHideDiv>
          <StyledSocialDiv variants={titleAnimation}>
            <StyledCircleDiv />

            <h2>Follow us on Social</h2>
          </StyledSocialDiv>
        </StyledHideDiv>
      </div>
    </StyledContactDiv>
  );
};

const StyledContactDiv = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
  }
`;

const StyledTitleDiv = styled.div`
  margin-bottom: 4rem;
  color: black;
  h2 {
    font-weight: 600;
  }
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const StyledCircleDiv = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #353535;
`;

const StyledSocialDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 3rem;
  }
  @media (max-width: 1500px) {
    h2 {
      font-size: 2rem;
    }
  }
`;
export default ContactUs;
