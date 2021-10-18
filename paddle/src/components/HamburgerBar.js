import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { firstBreakOutHomePage } from '../styles/MediaQueries';

function HamburgerBar({ active, setActive }) {
	return (
		<StyledHamburger style={{ right: active ? '0' : '-100%' }}>
			<StyledNav>
				<HamburgerButton>
					<FontAwesomeIcon
						onClick={() => setActive(false)}
						className='icon icon-times'
						icon={faTimes}
						size='4x'
					/>
				</HamburgerButton>

				<NavLogo>
					<LogoParagraph>PEDDLE</LogoParagraph>
				</NavLogo>

				<NavItems>
					<NavItemlist>About</NavItemlist>
					<NavItemlist>FAQS</NavItemlist>
					<NavItemlist>Pricing</NavItemlist>
					<NavItemlist>Testimonials</NavItemlist>
				</NavItems>

				<AuthenticationButton>
					<SignButton active='false'>SignIn</SignButton>
					<SignButton active='true'>SignOut</SignButton>
				</AuthenticationButton>
			</StyledNav>
		</StyledHamburger>
	);
}

const StyledHamburger = styled.div`
	position: fixed;
	min-width: 40rem;
	height: 100vh;
	top: 0;
	right: -100%;
	border: 3px solid #ba55d3;
	border-bottom-left-radius: 3rem;
	background-color: #ffffff;
	transition: all 250ms ease;
	z-index: 999;
	/* display: none;

	${firstBreakOutHomePage({
		display: 'flex',
	})} */
`;
const StyledNav = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 95%;
	padding: 1.5rem 0rem;
`;

const NavLogo = styled.div`
	margin: 1rem 0rem;
`;
const LogoParagraph = styled.p`
	font-family: 'Ranchers', cursive;
	font-size: 3.2rem;
	color: #ba55d3;
	font-weight: 400;
	cursor: pointer;
`;

const NavItems = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 2rem 0rem;
`;
const NavItemlist = styled.li`
	margin: 0rem 2rem;
	font-family: 'Rubik', sans-serif;
	font-size: 1.4rem;
	line-height: 1.8rem;
	color: #4f5665;
	font-weight: 400;
	cursor: pointer;
	margin: 2rem 0rem;
`;

const AuthenticationButton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	margin: 1.5rem 0rem;
`;

const SignButton = styled.a`
	margin: 0rem 2rem;
	font-family: 'Rubik', sans-serif;
	font-size: 1.4rem;
	line-height: 1.8rem;
	padding: 0.8rem 3rem;
	font-weight: 500;
	margin: 1rem 0rem;
	color: ${(props) => (props.active === 'true' ? '#BA55D3 ' : '#4f5665')};
	border-width: ${(props) => (props.active === 'true' ? '3px' : '')};
	border-color: ${(props) => (props.active === 'true' ? '#BA55D3' : '')};
	border-style: ${(props) => (props.active === 'true' ? 'solid' : '')};
	border-radius: ${(props) => (props.active === 'true' ? '.5rem' : '')};
`;

const HamburgerButton = styled.div`
	transition: all 1s ease;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	margin-right: 3rem;
	.icon-times {
		color: red;
	}
`;

export default HamburgerBar;
