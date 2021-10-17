import React from 'react';
import styled from 'styled-components';
import {
	StyledContent,
	StyledHeading,
	ButtonActive,
} from '../styles/ReuseableStyles';

function StartToday() {
	return (
		<StyledStartToday>
			<StyledStartTodayHeading>
				Get Started With Peddle Today
			</StyledStartTodayHeading>
			<StyledStartTodayContent>
				Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante
				egestas ullamcorper
			</StyledStartTodayContent>
			<StyledStartTodayButton>Start Today</StyledStartTodayButton>
		</StyledStartToday>
	);
}

const StyledStartToday = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const StyledStartTodayHeading = styled(StyledHeading)`
	width: 30%;
`;

const StyledStartTodayContent = styled(StyledContent)`
	width: 35%;
`;

const StyledStartTodayButton = styled(ButtonActive)`
	padding: 1.5rem 7rem;
	font-size: 1.5rem;
`;

export default StartToday;
