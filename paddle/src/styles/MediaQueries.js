import { css } from 'styled-components';

export const firstBreakOutGithub = (props) => {
	return css`
		@media only screen and (max-width: 1000px) {
			${props}
		}
	`;
};

export const SecondBreakOutGithub = (props) => {
	return css`
		@media only screen and (max-width: 700px) {
			${props}
		}
	`;
};

export const ThirdBreakOutGithub = (props) => {
	return css`
		@media only screen and (max-width: 490px) {
			${props}
		}
	`;
};

export const firstBreakOutHomePage = (props) => {
	return css`
		@media only screen and (max-width: 1200px) {
			${props}
		}
	`;
};

export const SecondBreakOutHomePage = (props) => {
	return css`
		@media only screen and (max-width: 1050px) {
			${props}
		}
	`;
};

export const ThirdBreakOutHomePage = (props) => {
	return css`
		@media only screen and (max-width: 950px) {
			${props}
		}
	`;
};

export const FourthBreakOutHomePage = (props) => {
	return css`
		@media only screen and (max-width: 560px) {
			${props}
		}
	`;
};
