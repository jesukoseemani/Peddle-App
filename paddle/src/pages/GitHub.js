import React from 'react';
import styled from 'styled-components';
import GithubNav from '../components/GithubNav';
import GithubUsersInfo from '../contexts/GithubUsersInfo';

function GitHub() {
	return (
		<StyledGithub>
			<GithubNav />
			<GithubUsersInfo />
		</StyledGithub>
	);
}

const StyledGithub = styled.div`
	width: 100%;
	max-width: 140rem;
	margin: 0 auto;
	background-color: #ffffff;
	padding: 0rem 5rem;
`;

export default GitHub;
