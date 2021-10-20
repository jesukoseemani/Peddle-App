import styled from 'styled-components';
import { motion } from 'framer-motion';
import { firstBreakOutHomePage, ThirdBreakOutHomePage } from './MediaQueries';

export const FlexContent = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const ButtonNotActive = styled.a`
	font-family: 'Rubik', sans-serif;
	font-size: 1.4rem;
	line-height: 1.8rem;
	padding: 1.2rem 4rem;
	font-weight: bold;
	color: #ba55d3;
	border: 3px solid #ba55d3;
	border-radius: 0.5rem;
	cursor: pointer;
`;

export const ButtonActive = styled.a`
	font-family: 'Rubik', sans-serif;
	font-size: 1.4rem;
	line-height: 1.8rem;
	padding: 1.2rem 4rem;
	font-weight: bold;
	background-color: #ba55d3;
	color: #ffffff;
	border: 1px solid transparent;
	border-radius: 0.5rem;
	box-shadow: 1px 15px 34px -7px rgba(186, 85, 211, 0.35);
	-webkit-box-shadow: 1px 15px 34px -7px rgba(186, 85, 211, 0.35);
	-moz-box-shadow: 1px 15px 34px -7px rgba(186, 85, 211, 0.35);
	cursor: pointer;
`;

export const StyledHeading = styled.h1`
	font-family: Rubik;
	font-weight: 500;
	font-size: 3.5rem;
	line-height: 5rem;
	color: #0b132a;
	margin-bottom: 1rem;

	${firstBreakOutHomePage({
    fontSize: '2.5rem',
  })}

	${ThirdBreakOutHomePage({
    fontSize: '3.5rem',
    textAlign: 'center',
  })}
`;
export const StyledContent = styled.p`
	font-family: Rubik;
	font-weight: normal;
	font-size: 1.6rem;
	line-height: 3rem;
	color: #4f5665;
	margin-bottom: 1rem;
	${firstBreakOutHomePage({
    fontSize: '1.3rem',
  })}
	${ThirdBreakOutHomePage({
    fontSize: '1.6rem',
    textAlign: 'center',
  })}
`;

export const LogoParagraph = styled.p`
	font-family: 'Ranchers', cursive;
	font-size: 3.2rem;
	line-height: 5.7rem;
	color: #ba55d3;
	font-weight: 400;
	cursor: pointer;
`;

export const Button = styled.button`
	font-size: 1.6rem;
	line-height: 3rem;
	color: #ffffff;
	padding: 0.5rem 2rem;
	outline: none;
	border: none;
`;
