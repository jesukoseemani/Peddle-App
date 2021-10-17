import React from 'react';
import styled from 'styled-components';
import PlanBox from '../components/PlanBox';
import SocialIcons from '../components/SocialIcons';
import StartToday from '../components/StartToday';
import pricing1 from '../images/pricing1.png';
import pricing2 from '../images/pricing2.png';
import pricing3 from '../images/pricing3.png';
import { StyledHeading, StyledContent } from '../styles/ReuseableStyles';

function Plan() {
	const data = [
		{
			image: `${pricing1}`,
			plan: 'Free Plan',
			amount: 'Free',
			description: [
				'Mauris sem neque',
				'Mauris sem neque',
				'Mauris sem neque',
				'Mauris sem neque',
			],
			active: false,
			month: null,
		},
		{
			image: `${pricing2}`,
			plan: 'Standard Plan',
			amount: '$9',
			description: [
				'Mauris sem neque',
				'Mauris sem neque',
				'Mauris sem neque',
				'Mauris sem neque',
				'Mauris sem neque',
			],
			active: false,
			month: '/ mo',
		},
		{
			image: `${pricing3}`,
			plan: 'Premium Plan',
			amount: '$12',
			description: [
				'Mauris sem neque',
				'Mauris sem neque',
				'Mauris sem neque',
				'Mauris sem neque',
				'Mauris sem neque',
				'Mauris sem neque',
			],
			active: true,
			month: '/ mo',
		},
	];

	return (
		<StyledPlan>
			<StyledHeading>Choose Your Plan</StyledHeading>
			<StyledContent>
				Let's choose the package that is best for you and explore it happily and
				cheerfully.
			</StyledContent>
			<StyledPlanBox>
				{data.map((item, index) => (
					<PlanBox box={item} key={index} />
				))}
			</StyledPlanBox>

			<StartToday />

			<SocialIcons />
		</StyledPlan>
	);
}

const StyledPlan = styled.div`
	text-align: center;
	background-color: #fcfcfc;
	padding: 10rem 10rem;
`;

const StyledPlanBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 3rem 0rem 10rem 0rem;
`;

export default Plan;
