import React from 'react';
import styled from 'styled-components';
import {
	ButtonActive,
	StyledContent,
	StyledHeading,
} from '../styles/ReuseableStyles';

function SubscribeBox() {
	return (
		<StyledSubscribe>
			<StyledSubscribeLeft>
				<StyledHeading>Subscribe Now to Get Special Features!</StyledHeading>
				<StyledContent>
					Praesent mollis lobortis nisl nec laoreet.
				</StyledContent>
			</StyledSubscribeLeft>
			<StyledSubscribeRight>
				<StyledSubscribeButton>Subscribe Now</StyledSubscribeButton>
			</StyledSubscribeRight>
		</StyledSubscribe>
	);
}
const StyledSubscribe = styled.div`
	width: 70%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	margin-top: -10rem;
	padding: 4rem;
	box-shadow: -8px 33px 186px -49px rgba(0, 0, 0, 0.22);
	-webkit-box-shadow: -8px 33px 186px -49px rgba(0, 0, 0, 0.22);
	-moz-box-shadow: -8px 33px 186px -49px rgba(0, 0, 0, 0.22);
	background-color: #ffffff;
`;
const StyledSubscribeLeft = styled.div`
	width: 50%;
`;
const StyledSubscribeRight = styled.div``;

const StyledSubscribeButton = styled(ButtonActive)`
	padding: 1.5rem 5rem;
	margin-right: 3rem;
`;

export default SubscribeBox;
