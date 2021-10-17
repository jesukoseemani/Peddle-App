import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/ReuseableStyles';

function GithubUserInfo({ item }) {
	return (
		<StyledUserInfo>
			<StyledUserInfoLeft>
				<StyledUserInfoLeftImage src={item.image} alt='user' />
			</StyledUserInfoLeft>
			<StyledUserInfoRight>
				<StyledUserInfoRightName>
					{item.name.toUpperCase()}
				</StyledUserInfoRightName>
				<StyledUserInfoRightDescription>
					{item.description}
				</StyledUserInfoRightDescription>
				<StyledUserInfoRightStarTime>
					<StyledUserInfoRightStarButton>
						<span>Stars:</span> {item.starnumber}
					</StyledUserInfoRightStarButton>
					<StyledUserInfoRightIssueButton>
						<span>issues:</span> {item.issue}
					</StyledUserInfoRightIssueButton>
					<StyledUserInfoRightTimeStamp>
						Submitted by <span>{item.time}</span> by {item.name}
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
`;
const StyledUserInfoLeft = styled.div`
	margin-right: 4rem;
`;
const StyledUserInfoLeftImage = styled.img`
	width: 25rem;
	height: 25rem;
	border-radius: 50%;
	border: 4px solid #ba55d3;
	object-fit: cover;
`;
const StyledUserInfoRight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
`;
const StyledUserInfoRightName = styled.div`
	font-family: 'Ranchers', cursive;
	font-weight: 500;
	font-size: 2rem;
	line-height: 5rem;
	letter-spacing: 3px;
	color: #0b132a;
`;
const StyledUserInfoRightDescription = styled.div`
	font-size: 1.6rem;
	line-height: 3rem;
	color: #0b132a;
`;
const StyledUserInfoRightStarTime = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 4rem 0rem;
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
`;

export default GithubUserInfo;
