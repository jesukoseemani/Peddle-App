import React from 'react';
import styled from 'styled-components';

function Nav() {
	return (
		<StyledNav>
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
	);
}

const StyledNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 3rem 0rem 1.5rem 0rem;
`;
const NavLogo = styled.div``;
const LogoParagraph = styled.p`
	font-family: 'Ranchers', cursive;
	font-size: 3.2rem;
	line-height: 5.7rem;
	color: #ba55d3;
	font-weight: 400;
	cursor: pointer;
`;

const NavItems = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	height: 3rem;
`;
const NavItemlist = styled.li`
	margin: 0rem 2rem;
	font-family: 'Rubik', sans-serif;
	font-size: 1.4rem;
	line-height: 1.8rem;
	color: #4f5665;
	font-weight: 400;
	cursor: pointer;
`;

const AuthenticationButton = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;

const SignButton = styled.a`
	margin: 0rem 2rem;
	font-family: 'Rubik', sans-serif;
	font-size: 1.4rem;
	line-height: 1.8rem;
	padding: 0.8rem 3rem;
	font-weight: 500;
	color: ${(props) => (props.active === 'true' ? '#BA55D3 ' : '#4f5665')};
	border-width: ${(props) => (props.active === 'true' ? '3px' : '')};
	border-color: ${(props) => (props.active === 'true' ? '#BA55D3' : '')};
	border-style: ${(props) => (props.active === 'true' ? 'solid' : '')};
	border-radius: ${(props) => (props.active === 'true' ? '.5rem' : '')};
`;
export default Nav;
