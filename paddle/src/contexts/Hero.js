import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade, photo1Anim } from '../styles/Animation';
import { FlexContent } from '../styles/ReuseableStyles';
import Nav from '../components/Nav';
import Developer from '../images/webdeveloper.png';
import {
	faUser,
	faMapMarkedAlt,
	faServer,
} from '@fortawesome/free-solid-svg-icons';
import StatsBox from '../components/StatsBox';
import { ButtonActive } from '../styles/ReuseableStyles';
import {
	firstBreakOutHomePage,
	ThirdBreakOutHomePage,
	FourthBreakOutHomePage,
} from '../styles/MediaQueries';
import HamburgerBar from '../components/HamburgerBar';

function Hero() {
	const [active, setActive] = useState(false);
	return (
		<StyledHero>
			<Nav active={active} setActive={setActive} />
			<GetStarted>
				<GetStartedLeft variants={photo1Anim}>
					<GetStartedLeftHeading>
						We Are Everything We Aspire To BE
					</GetStartedLeftHeading>
					<GetStartedLeftParagraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
						orci condimentum lectus efficitur tempor vel eu massa. Sed molestie
						turpis eget ipsum malesuada dignissim
					</GetStartedLeftParagraph>
					<GetStartedLeftButton>Get Started</GetStartedLeftButton>
				</GetStartedLeft>
				<GetStartedRight variants={fade}>
					<GetStartedRightImage src={Developer} alt='developer' />
				</GetStartedRight>
			</GetStarted>
			<StatsBoxes>
				<StatsBox number={'90+'} content={'User'} icon={faUser} />
				<StatsBox
					border={'true'}
					number={'30+'}
					content={'Locations'}
					icon={faMapMarkedAlt}
				/>
				<StatsBox number={'50+'} content={'Servers'} icon={faServer} />
			</StatsBoxes>
			<HamburgerBar active={active} setActive={setActive} />
		</StyledHero>
	);
}

const StyledHero = styled.div`
	background-color: #ffffff;
	padding: 0rem 10rem;
	position: relative;

	${FourthBreakOutHomePage({
		padding: '0rem 5rem',
	})}
`;

const GetStarted = styled(FlexContent)`
	margin-top: -1rem;
	height: 70vh;

	${ThirdBreakOutHomePage({
		flexDirection: 'column-reverse',
		marginTop: '13rem',
	})}
`;

const GetStartedLeft = styled(motion.div)`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;

	${ThirdBreakOutHomePage({
		alignItems: 'center',
	})}
`;

const GetStartedRight = styled(motion.div)`
	flex: 1;
	width: 100%;

	${ThirdBreakOutHomePage({
		marginBottom: '1rem',
	})}
`;

const GetStartedRightImage = styled.img`
	width: 100%;
	object-fit: cover;
`;
const GetStartedLeftHeading = styled.h1`
	font-family: Rubik;
	font-weight: 500;
	font-size: 4.5rem;
	line-height: 6rem;
	color: #0b132a;
	text-shadow: 0px 2px 4px #ba55d3;
	max-width: 90%;

	${firstBreakOutHomePage({
		fontSize: '3.5rem',
	})}

	${ThirdBreakOutHomePage({
		textAlign: 'center',
	})}
`;

const GetStartedLeftParagraph = styled.p`
	font-family: Rubik;
	font-size: 1.5rem;
	line-height: 3rem;
	color: #4f5665;
	max-width: 90%;
	margin: 1.5rem 0rem;

	${firstBreakOutHomePage({
		fontSize: '1.2rem',
	})}
	${ThirdBreakOutHomePage({
		textAlign: 'center',
		fontSize: '1.5rem',
	})}
`;

const GetStartedLeftButton = styled(ButtonActive)``;

const StatsBoxes = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	margin: 3rem auto;
	padding: 2rem;
	background-color: #ffffff;
	border-radius: 1rem;
	box-shadow: -8px 33px 186px -49px rgba(0, 0, 0, 0.22);
	-webkit-box-shadow: -8px 33px 186px -49px rgba(0, 0, 0, 0.22);
	-moz-box-shadow: -8px 33px 186px -49px rgba(0, 0, 0, 0.22);

	${ThirdBreakOutHomePage({
		width: '100%',
	})}

	${FourthBreakOutHomePage({
		padding: '0rem',
	})}
`;

export default Hero;
