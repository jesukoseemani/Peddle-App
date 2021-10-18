import React from 'react';
import styled from 'styled-components';
import SubscribeBox from '../components/SubscribeBox';
import { LogoParagraph } from '../styles/ReuseableStyles';
import {
	SecondBreakOutHomePage,
	ThirdBreakOutHomePage,
} from '../styles/MediaQueries';

function Footer() {
	return (
		<StyledFooter>
			<SubscribeBox />

			<StyledFooterFlex>
				<StyledFooterDescription>
					<LogoParagraph>PEDDLE</LogoParagraph>

					<StyledFooterDescriptionContent>
						Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
						ante egestas ullamcorper. Duis id mauris consequat, ultrices ligula
						at, laoreet mag.
					</StyledFooterDescriptionContent>
				</StyledFooterDescription>
				<WrapperList>
					<StyledFooterList>
						<StyledFooterListHeading>Product</StyledFooterListHeading>
						<StyledFooterListItem>Praesent </StyledFooterListItem>
						<StyledFooterListItem>Laoreet</StyledFooterListItem>
						<StyledFooterListItem>Laoreet</StyledFooterListItem>
						<StyledFooterListItem>Server</StyledFooterListItem>
					</StyledFooterList>

					<StyledFooterList>
						<StyledFooterListHeading>Engage</StyledFooterListHeading>
						<StyledFooterListItem>Mauris</StyledFooterListItem>
						<StyledFooterListItem>Aenean</StyledFooterListItem>
						<StyledFooterListItem>Linsean</StyledFooterListItem>
						<StyledFooterListItem>Lingula</StyledFooterListItem>
					</StyledFooterList>

					<StyledFooterList>
						<StyledFooterListHeading>Earn Money</StyledFooterListHeading>
						<StyledFooterListItem>Ultrices</StyledFooterListItem>
						<StyledFooterListItem>Fusce</StyledFooterListItem>
					</StyledFooterList>
				</WrapperList>
			</StyledFooterFlex>

			<StyledFooterCopyWrite>&copy;2020PEDDLE</StyledFooterCopyWrite>
		</StyledFooter>
	);
}
const StyledFooter = styled.div`
	padding: 3rem 0rem;
	background-color: #f8f8f8;
`;
const StyledFooterFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	padding: 0rem 10rem;
	margin-top: 5rem;
	margin-bottom: 5rem;
	${SecondBreakOutHomePage({
		padding: '0rem 5rem',
	})}
	${ThirdBreakOutHomePage({
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '5rem',
	})}
`;
const StyledFooterDescription = styled.div`
	flex: 2;

	${ThirdBreakOutHomePage({
		textAlign: 'center',
	})}
`;
const StyledFooterDescriptionContent = styled.div`
	font-size: 1.6rem;
	line-height: 3rem;
	color: #4f5665;
	width: 80%;
	${ThirdBreakOutHomePage({
		textAlign: 'center',
		width: '100%',
		marginBottom: '3rem',
	})}
`;

const WrapperList = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
`;

const StyledFooterList = styled.ul``;
const StyledFooterListHeading = styled.li`
	font-weight: 500;
	font-size: 1.8rem;
	line-height: 5rem;
	color: #0b132a;
`;
const StyledFooterListItem = styled.li`
	font-size: 1.6rem;
	line-height: 3rem;
	color: #4f5665;
	cursor: pointer;
`;

const StyledFooterCopyWrite = styled.p`
	padding: 0rem 10rem;
	font-size: 1.6rem;
	line-height: 2rem;
	text-align: left;
	color: #afb5c0;

	${SecondBreakOutHomePage({
		padding: '0rem 5rem',
	})}
`;

export default Footer;
