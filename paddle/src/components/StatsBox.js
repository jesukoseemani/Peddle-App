import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StatsBox({ number, icon, content }) {
	return (
		<StatBox>
			<StatsBoxLeft>
				<FontAwesomeIcon
					style={{
						color: '#BA55D3',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					icon={icon}
					size='2x'
				/>
			</StatsBoxLeft>
			<StatsBoxRight>
				<StatsBoxRightNumber>{number}</StatsBoxRightNumber>
				<StatsBoxRightContent>{content}</StatsBoxRightContent>
			</StatsBoxRight>
		</StatBox>
	);
}

const StatBox = styled.div`
	flex: 1;
	padding: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 2px solid #eeeff2;
	&:first-child {
		border-left: 0rem;
	}
`;

const StatsBoxLeft = styled.div`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	background-color: rgba(186, 85, 211, 0.35);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
`;

const StatsBoxRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin-left: 3rem;
`;

const StatsBoxRightNumber = styled.h1`
	font-family: Rubik;
	font-weight: bold;
	font-size: 2.3rem;
	line-height: 3rem;
	color: #0b132a;
`;

const StatsBoxRightContent = styled.h3`
	font-family: Rubik;
	font-weight: normal;
	font-size: 1.8rem;
	line-height: 3rem;
	color: #4f5665;
`;

export default StatsBox;
