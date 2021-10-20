import React from 'react';
import styled from 'styled-components';
import {
  ButtonActive,
  StyledContent,
  StyledHeading,
} from '../styles/ReuseableStyles';
import {
  firstBreakOutHomePage,
  ThirdBreakOutHomePage,
  FourthBreakOutHomePage,
} from '../styles/MediaQueries';

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

	${ThirdBreakOutHomePage({
    flexDirection: 'column',
  })}
`;
const StyledSubscribeLeft = styled.div`
	width: 50%;
	${ThirdBreakOutHomePage({
    width: '100%',
    margin: '2rem 0rem',
  })}
`;
const StyledSubscribeRight = styled.div`
	${ThirdBreakOutHomePage({
    margin: '1rem 0rem',
  })}
`;

const StyledSubscribeButton = styled(ButtonActive)`
	padding: 1.5rem 5rem;
	margin-right: 3rem;

	${firstBreakOutHomePage({
    padding: '1rem 3rem',
    fontSize: '1.3rem',
    marginRight: '0rem',
  })}

	${FourthBreakOutHomePage({
    marginRight: '0rem',
  })}
`;

export default SubscribeBox;
