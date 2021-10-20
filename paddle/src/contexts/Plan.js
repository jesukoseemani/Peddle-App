import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade } from '../styles/Animation';
import { useScroll } from '../components/useScroll';
import PlanBox from '../components/PlanBox';
import StartToday from '../components/StartToday';
import pricing1 from '../images/pricing1.png';
import pricing2 from '../images/pricing2.png';
import pricing3 from '../images/pricing3.png';
import { StyledHeading, StyledContent } from '../styles/ReuseableStyles';
import {
  SecondBreakOutHomePage,
  ThirdBreakOutHomePage,
  FourthBreakOutHomePage,
} from '../styles/MediaQueries';

function Plan() {
  const [element, controls] = useScroll();
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
      <StyledPlanBox
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        {data.map((item, index) => (
          <PlanBox box={item} key={index} />
        ))}
      </StyledPlanBox>

      <StartToday />
    </StyledPlan>
  );
}

const StyledPlan = styled.div`
	text-align: center;
	background-color: #fcfcfc;
	padding: 10rem 10rem;

	${SecondBreakOutHomePage({
    padding: '10rem 3rem',
  })}

	${FourthBreakOutHomePage({
    padding: '10rem .5rem',
  })}
`;

const StyledPlanBox = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 3rem 0rem 10rem 0rem;

	${ThirdBreakOutHomePage({
    flexDirection: 'column',
    margin: '3rem 10rem 10rem 10rem',
  })}

	${FourthBreakOutHomePage({
    margin: '3rem 3rem 10rem 3rem',
  })}
`;

export default Plan;
