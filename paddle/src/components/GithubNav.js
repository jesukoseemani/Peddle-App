import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faHome,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { firstBreakOutGithub } from '../styles/MediaQueries';

function GithubNav() {
  return (
    <StyledGithubNav>
      <StyledGithubNavHeading>Trending Repos</StyledGithubNavHeading>
      <StyledGithubNavWrapper>
        <StyledGithubNavIcon>
          <FontAwesomeIcon
            className="icon icon-arrow-left"
            icon={faArrowAltCircleLeft}
            size="2x"
          />
        </StyledGithubNavIcon>
        <StyledGithubNavIcon>
          <FontAwesomeIcon
            className="icon icon-arrow-right"
            icon={faArrowAltCircleRight}
            size="2x"
          />
        </StyledGithubNavIcon>
        <StyledGithubNavIcon>
          <FontAwesomeIcon className="icon icon-home" icon={faHome} size="2x" />
        </StyledGithubNavIcon>
        <StyledGithubNavIcon>
          <FontAwesomeIcon
            className="icon icon-times"
            icon={faTimes}
            size="2x"
          />
        </StyledGithubNavIcon>
        <StyledGithubNavInput type="text" placeholder="Search Users" />
        <StyledGithubNavIcon>
          <FontAwesomeIcon className="search" icon={faSearch} size="2x" />
        </StyledGithubNavIcon>
      </StyledGithubNavWrapper>
    </StyledGithubNav>
  );
}

const StyledGithubNav = styled.div`
	width: 100%;
	text-align: center;
	padding: 3rem 0rem;
	box-shadow: -8px 33px 186px -49px rgba(0, 0, 0, 0.12);
	-webkit-box-shadow: -8px 33px 186px -49px rgba(0, 0, 0, 0.12);
	-moz-box-shadow: -8px 33px 186px -49px rgba(0, 0, 0, 0.12);
	background-color: #ffffff;
`;
const StyledGithubNavHeading = styled.h1`
	color: black;
	margin: 2rem 0rem;
`;

const StyledGithubNavWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 0rem 1rem 2rem 1rem;
`;

const StyledGithubNavIcon = styled.div`
	.icon {
		margin: 0rem 2rem;
		font-size: 3rem;
		color: black;
		cursor: pointer;

		${firstBreakOutGithub({ display: 'none' })}
	}

	.icon-times {
		color: red;
	}

	.search {
		margin-left: -4rem;
		color: #ba55d3;
	}
`;

const StyledGithubNavInput = styled.input`
	flex: 1;
	padding: 1rem;
	outline: none;
`;

export default GithubNav;
