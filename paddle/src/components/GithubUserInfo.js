import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/ReuseableStyles';
import TimeAgo from 'timeago-react';
import randomAvatar from '../images/default.jpg';
import {
	firstBreakOutGithub,
	SecondBreakOutGithub,
	ThirdBreakOutGithub,
} from '../styles/MediaQueries';

function GithubUserInfo({ item, parentref }) {
	return (
		<StyledUserInfo ref={parentref}>
			<StyledUserInfoLeft>
				<StyledUserInfoLeftImage
					src={item.owner.avatar_url ? item.owner.avatar_url : randomAvatar}
					alt={item.owner.login}
				/>
			</StyledUserInfoLeft>
			<StyledUserInfoRight>
				<StyledUserInfoRightName>
					{item.name.toUpperCase()}
				</StyledUserInfoRightName>
				<StyledUserInfoRightDescription>
					{item.description
						? item.description
						: 'There is no description for this Repositories'}
				</StyledUserInfoRightDescription>
				<StyledUserInfoRightStarTime>
					<StyledUserInfoRightStarTimeWrapper>
						<StyledUserInfoRightStarButton>
							<span>Stars:</span>{' '}
							{item.stargrazers_count ? item.stargrazers_count : 0}
						</StyledUserInfoRightStarButton>
						<StyledUserInfoRightIssueButton>
							<span>issues:</span> {item.open_issues_count}
						</StyledUserInfoRightIssueButton>
					</StyledUserInfoRightStarTimeWrapper>

					<StyledUserInfoRightTimeStamp>
						Submitted by{' '}
						<span>
							<TimeAgo datetime={item.created_at} />
						</span>{' '}
						by {item.name}
					</StyledUserInfoRightTimeStamp>
				</StyledUserInfoRightStarTime>
			</StyledUserInfoRight>
		</StyledUserInfo>
	);
}

const StyledUserInfo = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin: 1rem 0rem;

	${ThirdBreakOutGithub({
		flexDirection: 'column',
		justifyContent: 'center',
	})}
`;
const StyledUserInfoLeft = styled.div`
	margin-right: 4rem;

	${ThirdBreakOutGithub({
		marginBottom: '2rem',
	})}
`;
const StyledUserInfoLeftImage = styled.img`
	width: 25rem;
	height: 25rem;
	border-radius: 50%;
	border: 4px solid #ba55d3;
	object-fit: cover;

	${SecondBreakOutGithub({
		width: '15rem',
		height: '15rem',
		border: '2px solid #ba55d3',
	})}
`;
const StyledUserInfoRight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	${ThirdBreakOutGithub({
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	})}
`;
const StyledUserInfoRightName = styled.div`
	font-family: 'Ranchers', cursive;
	font-weight: 500;
	font-size: 2rem;
	line-height: 5rem;
	letter-spacing: 3px;
	color: #0b132a;

	${SecondBreakOutGithub({
		lineHeight: '1rem',
		marginBottom: '1rem',
	})}
`;
const StyledUserInfoRightDescription = styled.div`
	font-size: 1.6rem;
	line-height: 3rem;
	color: #0b132a;
	${ThirdBreakOutGithub({
		textAlign: 'center',
	})}
`;
const StyledUserInfoRightStarTime = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 4rem 0rem;

	${firstBreakOutGithub({
		flexDirection: 'column',
		margin: '.5rem 0rem',
		alignItems: 'flex-start',
		justifyContent: 'center',
	})}

	${ThirdBreakOutGithub({
		alignItems: 'center',
	})}
`;
const StyledUserInfoRightStarTimeWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 4rem 0rem;

	${SecondBreakOutGithub({
		margin: '2rem 0rem',
		justifyContent: 'center',
		alignItems: 'center',
	})}
`;
const StyledUserInfoRightStarButton = styled(Button)`
	background-color: #811752;
`;
const StyledUserInfoRightIssueButton = styled(Button)`
	margin-left: 2rem;
	background-color: #709fb0;
`;
const StyledUserInfoRightTimeStamp = styled.div`
	font-size: 1.3rem;
	line-height: 3rem;
	color: #0b132a;
	margin-left: 2rem;

	span {
		color: black;
		font-weight: bold;
		font-size: 1.5rem;
	}

	${firstBreakOutGithub({
		marginLeft: '-.3rem',
	})}
`;

export default GithubUserInfo;
