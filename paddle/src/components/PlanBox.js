import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ButtonActive, ButtonNotActive } from '../styles/ReuseableStyles';
import { ThirdBreakOutHomePage } from '../styles/MediaQueries';

function PlanBox({ box }) {
  return (
    <StyledPlanBox>
      <PlanBoxImageContainer>
        <PlanBoxImage src={box.image} alt="box-plan" />
      </PlanBoxImageContainer>
      <PlanBoxTitle>{box.plan}</PlanBoxTitle>
      <PlanBoxList>
        {box.description.map((item, index) => (
          <PlanBoxListItems key={index}>
            <span>
              <FontAwesomeIcon
                style={{
								  color: '#2FAB73',
								  marginRight: '2rem',
                }}
                icon={faCheck}
                size="1x"
              />
            </span>
            {item}
          </PlanBoxListItems>
        ))}
      </PlanBoxList>

      <PlanBoxAmount>
        {box.amount}
        <span>{box.month}</span>
      </PlanBoxAmount>
      {box.active ? (
        <PlanBoxButtonActive>Select</PlanBoxButtonActive>
      ) : (
        <PlanBoxButton>Select</PlanBoxButton>
      )}
    </StyledPlanBox>
  );
}

const StyledPlanBox = styled.div`
	flex: 1;
	width: 100%;
	height: 76rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 2px solid #ba55d3;
	margin: 2rem 2rem;
	padding: 2rem;
	background-color: #ffffff;

	${ThirdBreakOutHomePage({
    margin: '2rem 0rem',
  })}
`;

const PlanBoxImageContainer = styled.div`
	margin-bottom: 1rem;
	width: 100%;
`;

const PlanBoxImage = styled.img`
	width: 21rem;
	height: 21rem;
	object-fit: cover;

	${ThirdBreakOutHomePage({
    width: '30rem',
    height: '21rem',
  })}
`;

const PlanBoxTitle = styled.h3`
	font-family: Rubik;
	font-weight: 500;
	font-size: 1.8rem;
	line-height: 3rem;
	text-align: center;
	color: #0b132a;
	margin-bottom: 1rem;
	${ThirdBreakOutHomePage({
    fontSize: '2.3rem',
    marginBottom: '3rem',
  })}
`;
const PlanBoxList = styled.ul`
	height: 40%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	${ThirdBreakOutHomePage({
    margin: '4rem 0rem',
  })}
`;
const PlanBoxListItems = styled.li`
	font-family: Rubik;
	font-weight: normal;
	font-size: 1.4rem;
	line-height: 3rem;
	color: #4f5665;
	${ThirdBreakOutHomePage({
    fontSize: '2rem',
    marginBottom: '2rem',
  })}
`;
const PlanBoxAmount = styled.h3`
	font-family: Rubik;
	font-weight: 500;
	font-size: 2.5rem;
	line-height: 3rem;
	text-align: center;
	color: #0b132a;
	margin-bottom: 1rem;
	${ThirdBreakOutHomePage({
    fontSize: '2.8rem',
    margin: '3rem 0rem',
  })}

	span {
		margin-left: 1rem;
		font-size: 2rem;
		font-weight: 100;
		color: gray;
	}
`;
const PlanBoxButton = styled(ButtonNotActive)``;
const PlanBoxButtonActive = styled(ButtonActive)``;

export default PlanBox;
