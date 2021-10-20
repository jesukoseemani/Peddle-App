import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../styles/Animation';
import ScrollTop from '../components/ScrollTop';
import Features from '../contexts/Features';
import Footer from '../contexts/Footer';
import Hero from '../contexts/Hero';
import Plan from '../contexts/Plan';
import Reviews from '../contexts/Reviews';

function HomePage() {
  return (
    <StyledHome
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Hero />
      <Features />
      <Plan />
      <Reviews />
      <Footer />

      <ScrollTop />
    </StyledHome>
  );
}

const StyledHome = styled(motion.div)`
	margin: 0 auto;
	background-color: #ffffff;
	position: relative;
`;

export default HomePage;
