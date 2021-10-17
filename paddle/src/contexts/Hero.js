import React from 'react';
import styled from 'styled-components';
import { FlexContent } from '../styles/ReuseableStyles';
import Nav from '../components/Nav';
// import { ReactComponent as Developer } from '../images/developer.svg';
import Developer from '../images/webdeveloper.png';
import {
	faUser,
	faMapMarkedAlt,
	faServer,
} from '@fortawesome/free-solid-svg-icons';
import StatsBox from '../components/StatsBox';
import { ButtonActive } from '../styles/ReuseableStyles';

function Hero() {
	return (
		<StyledHero>
			<Nav />
			<GetStarted>
				<GetStartedLeft>
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
				<GetStartedRight>
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
		</StyledHero>
	);
}

const StyledHero = styled.div`
	background-color: #ffffff;
	padding: 0rem 10rem;
`;

const GetStarted = styled(FlexContent)`
	margin-top: -1rem;
`;

const GetStartedLeft = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	height: 28rem;
`;

const GetStartedRight = styled.div`
	flex: 1;
	width: 100%;
`;

const GetStartedRightImage = styled.img`
	width: 100%;
	object-fit: cover;

	/* #webdev {
		max-width: 83rem;
		max-width: 100%;
		object-fit: cover;
	}  */
`;
const GetStartedLeftHeading = styled.h1`
	font-family: Rubik;
	font-weight: 500;
	font-size: 4.5rem;
	line-height: 6rem;
	color: #0b132a;
	text-shadow: 0px 2px 4px #ba55d3;
	max-width: 90%;
`;

const GetStartedLeftParagraph = styled.p`
	font-family: Rubik;
	font-size: 1.5rem;
	line-height: 3rem;
	color: #4f5665;
	max-width: 90%;
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
`;

export default Hero;
