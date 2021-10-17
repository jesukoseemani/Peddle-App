import React from 'react';
import styled from 'styled-components';
import { FlexContent } from '../styles/ReuseableStyles';
import piano from '../images/piano.png';
function Features() {
	return (
		<StyledFeatures>
			<StyledFeaturesLeft>
				<StyledFeaturesLeftImage src={piano} alt='piano' />
			</StyledFeaturesLeft>
			<StyledFeaturesRight>
				<StyledFeaturesRightHeading>
					Features We Provide For You
				</StyledFeaturesRightHeading>
				<StyledFeaturesRightParagraph>
					Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero
					eu sem finibus lacinia nec pulvinar.
				</StyledFeaturesRightParagraph>
				<StyledFeaturesRightLists>
					<StyledFeaturesRightListsItem>
						<StyledFeaturesRightListsItemBox> </StyledFeaturesRightListsItemBox>
						<StyledFeaturesRightListsItemContent>
							{' '}
							Curabitur tempor justo
						</StyledFeaturesRightListsItemContent>
					</StyledFeaturesRightListsItem>
					<StyledFeaturesRightListsItem>
						<StyledFeaturesRightListsItemBox> </StyledFeaturesRightListsItemBox>
						<StyledFeaturesRightListsItemContent>
							{' '}
							Curabitur tempor justo
						</StyledFeaturesRightListsItemContent>
					</StyledFeaturesRightListsItem>
					<StyledFeaturesRightListsItem>
						<StyledFeaturesRightListsItemBox> </StyledFeaturesRightListsItemBox>
						<StyledFeaturesRightListsItemContent>
							{' '}
							Curabitur tempor justo
						</StyledFeaturesRightListsItemContent>
					</StyledFeaturesRightListsItem>
					<StyledFeaturesRightListsItem>
						<StyledFeaturesRightListsItemBox> </StyledFeaturesRightListsItemBox>
						<StyledFeaturesRightListsItemContent>
							{' '}
							Curabitur tempor justo
						</StyledFeaturesRightListsItemContent>
					</StyledFeaturesRightListsItem>
				</StyledFeaturesRightLists>
			</StyledFeaturesRight>
		</StyledFeatures>
	);
}

const StyledFeatures = styled(FlexContent)`
	padding: 10rem 10rem;
`;
const StyledFeaturesLeft = styled.div``;
const StyledFeaturesRight = styled.div``;
const StyledFeaturesLeftImage = styled.img`
	width: 95%;
	object-fit: cover;
`;
const StyledFeaturesRightHeading = styled.h1`
	font-family: Rubik;
	font-weight: 500;
	font-size: 3.5rem;
	line-height: 5rem;
	color: #0b132a;
	margin-bottom: 1rem;
`;
const StyledFeaturesRightParagraph = styled.p`
	font-family: Rubik;
	font-weight: normal;
	font-size: 1.6rem;
	line-height: 3rem;
	color: #4f5665;
`;
const StyledFeaturesRightLists = styled.ul``;
const StyledFeaturesRightListsItem = styled.li`
	font-family: Rubik;
	font-style: normal;
	font-weight: normal;
	font-size: 1.4rem;
	line-height: 3rem;
	color: #4f5665;
	display: flex;
	align-items: center;
	margin: 2rem 0rem;
`;
const StyledFeaturesRightListsItemBox = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	background-color: #ba55d3;
	border-radius: 0.5rem;
`;

const StyledFeaturesRightListsItemContent = styled.p`
	margin-left: 1rem;
`;

export default Features;
