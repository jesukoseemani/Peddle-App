import React from 'react';
import GithubUserInfo from '../components/GithubUserInfo';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronCircleLeft,
	faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

function GithubUsersInfo() {
	const data = [
		{
			image: 'https://picsum.photos/600',
			name: 'koseemani ayo',
			description:
				'lorem lorem lorem lorem lorem lorem lorem lorem lorme lore loeje lenmem tafvsbt',
			starnumber: '118k',
			issue: '83k',
			time: '3 days ago',
		},
		{
			image: 'https://picsum.photos/600',
			name: 'koseemani ayo',
			description:
				'lorem lorem lorem lorem lorem lorem lorem lorem lorme lore loeje lenmem tafvsbt',
			starnumber: '118k',
			issue: '83k',
			time: '3 days ago',
		},
		{
			image: 'https://picsum.photos/600',
			name: 'koseemani ayo',
			description:
				'lorem lorem lorem lorem lorem lorem lorem lorem lorme lore loeje lenmem tafvsbt',
			starnumber: '118k',
			issue: '83k',
			time: '3 days ago',
		},
	];
	return (
		<>
			<StyledGithubUsersWrapper>
				{data.map((dataItem, i) => (
					<GithubUserInfo item={dataItem} key={i} />
				))}
			</StyledGithubUsersWrapper>
			<StyledGithubUsersPreviousNext>
				<StyledGithubUsersPrevious>
					<span>PREV</span>
					<FontAwesomeIcon
						className='icon icon-arrow-left'
						icon={faChevronCircleLeft}
						size='2x'
					/>
				</StyledGithubUsersPrevious>
				<StyledGithubUsersNext>
					<FontAwesomeIcon
						className='icon icon-arrow-right'
						icon={faChevronCircleRight}
						size='2x'
					/>
					<span>NEXT</span>
				</StyledGithubUsersNext>
			</StyledGithubUsersPreviousNext>
		</>
	);
}
const StyledGithubUsersWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	padding: 2rem 0rem;
	width: 100%;
`;

const StyledGithubUsersPreviousNext = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	cursor: pointer;
`;

const StyledGithubUsersPrevious = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 2rem;

	span {
		margin-right: 2rem;
		color: red;
	}
`;

const StyledGithubUsersNext = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 2rem;

	span {
		margin-left: 2rem;
		color: black;
	}
`;

export default GithubUsersInfo;
