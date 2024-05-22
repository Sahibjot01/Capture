import React from "react";
//import component
import Toggle from "./Toggle";
//import styled components
import styled from "styled-components";
import { StyledAboutDiv } from "../styles";
//framer motion
import { motion } from "framer-motion";
import { fadeAnimation } from "../animation";

const FaqSection = () => {
  return (
    <StyledFaqDiv>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <Toggle title="How Do I Start?" layoutId="start">
        <motion.div variants={fadeAnimation} className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, animi?
          </p>
        </motion.div>
      </Toggle>
      <Toggle title="Daily Schedule" layoutId="schedule">
        <motion.div variants={fadeAnimation} className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, animi?
          </p>
        </motion.div>
      </Toggle>
      <Toggle title="Different Payment Methods" layoutId="payment">
        <motion.div variants={fadeAnimation} className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, animi?
          </p>
        </motion.div>
      </Toggle>
      <Toggle title="What Product do you offer." layoutId="product">
        <motion.div variants={fadeAnimation} className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, animi?
          </p>
        </motion.div>
      </Toggle>
    </StyledFaqDiv>
  );
};

const StyledFaqDiv = styled(StyledAboutDiv)`
  display: block;
  span {
    display: block;
  }
  h2 {
    font-size: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
