import React from 'react';
import styled from 'styled-components';
import {
	StyledContent,
	StyledHeading,
	ButtonActive,
} from '../styles/ReuseableStyles';
import { ReactComponent as Discord } from '../images/discord.svg';
import { ReactComponent as Netflix } from '../images/netflix.svg';
import { ReactComponent as Amazon } from '../images/amazon.svg';
import { ReactComponent as Reddit } from '../images/reddit-2.svg';
import { ReactComponent as Spotify } from '../images/spotify.svg';
import {
	firstBreakOutHomePage,
	ThirdBreakOutHomePage,
	FourthBreakOutHomePage,
} from '../styles/MediaQueries';

function StartToday() {
	return (
		<StyledStartToday>
			<StyledStartTodayHeading>
				Get Started With Peddle Today
			</StyledStartTodayHeading>
			<StyledStartTodayContent>
				Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante
				egestas ullamcorper
			</StyledStartTodayContent>
			<StyledStartTodayButton>Start Today</StyledStartTodayButton>

			<LogoContainer>
				<LogoItemsNetflix>
					<Netflix />
				</LogoItemsNetflix>
				<LogoItemsReddit>
					<Reddit />
				</LogoItemsReddit>
				<LogoItemsAmazon>
					<Amazon />
				</LogoItemsAmazon>
				<LogoItemsDiscord>
					<Discord />
				</LogoItemsDiscord>
				<LogoItemsSpotify>
					<Spotify />
				</LogoItemsSpotify>
			</LogoContainer>
		</StyledStartToday>
	);
}

const StyledStartToday = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	/* background-color: #ffffff; */
`;

const StyledStartTodayHeading = styled(StyledHeading)`
	width: 30%;

	${ThirdBreakOutHomePage({
		width: '70%',
	})}
`;

const StyledStartTodayContent = styled(StyledContent)`
	width: 35%;
	${ThirdBreakOutHomePage({
		width: '70%',
	})}
`;

const StyledStartTodayButton = styled(ButtonActive)`
	padding: 1.5rem 7rem;
	font-size: 1.5rem;
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 5rem;
	width: 100%;
`;

const LogoItemsNetflix = styled(Netflix)`
	width: 20rem;
	height: 20rem;
	object-fit: cover;
	fill: gray;
	opacity: 0.4;

	${firstBreakOutHomePage({
		width: '15rem',
		height: '15rem',
	})}

	${ThirdBreakOutHomePage({
		width: '10rem',
		height: '10rem',
	})}

	${FourthBreakOutHomePage({
		width: '8rem',
		height: '8rem',
	})}
`;

const LogoItemsReddit = styled(Reddit)`
	width: 20rem;
	height: 20rem;
	object-fit: cover;
	fill: gray;
	opacity: 0.4;

	${ThirdBreakOutHomePage({
		width: '10rem',
		height: '10rem',
	})}

	${FourthBreakOutHomePage({
		width: '8rem',
		height: '8rem',
	})}
`;

const LogoItemsAmazon = styled(Amazon)`
	width: 20rem;
	height: 20rem;
	object-fit: cover;
	fill: gray;
	opacity: 0.4;

	${ThirdBreakOutHomePage({
		width: '10rem',
		height: '10rem',
	})}

	${FourthBreakOutHomePage({
		width: '8rem',
		height: '8rem',
	})}
`;

const LogoItemsDiscord = styled(Discord)`
	width: 10rem;
	height: 10rem;
	object-fit: cover;
	fill: gray;
	opacity: 0.4;
	${ThirdBreakOutHomePage({
		width: '5rem',
		height: '5rem',
	})}

	${FourthBreakOutHomePage({
		width: '3rem',
		height: '3rem',
	})}
`;

const LogoItemsSpotify = styled(Spotify)`
	width: 10rem;
	height: 10rem;
	object-fit: cover;
	fill: gray;
	opacity: 0.4;

	${FourthBreakOutHomePage({
		width: '3rem',
		height: '3rem',
	})}
`;

export default StartToday;
