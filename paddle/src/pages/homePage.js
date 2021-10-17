import React from 'react';
import styled from 'styled-components';
import Features from '../contexts/Features';
import Footer from '../contexts/Footer';
import Hero from '../contexts/Hero';
import Plan from '../contexts/Plan';
import Reviews from '../contexts/Reviews';

function HomePage() {
	return (
		<StyledHome>
			<Hero />
			<Features />
			<Plan />
			<Reviews />
			<Footer />
		</StyledHome>
	);
}

const StyledHome = styled.div`
	margin: 0 auto;
	background-color: #ffffff;
`;

export default HomePage;
