import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ReviewsBox({ box }) {
  return (
    <StyledReviewsBox
      style={{
			  borderColor: box.active === true ? '#BA55D3' : '',
			  borderWidth: box.active === true ? '3px' : '',
      }}
    >
      <StyledReviewsBoxTop>
        <StyledReviewsBoxTopLeft>
          <StyledReviewsBoxTopLeftImage src={box.image} alt="user-photo" />

          <StyledReviewsBoxTopLeftContent>
            <StyledReviewsBoxTopLeftContentName>
              {box.name}
            </StyledReviewsBoxTopLeftContentName>

            <StyledReviewsBoxTopLeftContentLocation>
              {box.location}
            </StyledReviewsBoxTopLeftContentLocation>
          </StyledReviewsBoxTopLeftContent>
        </StyledReviewsBoxTopLeft>

        <StyledReviewsBoxTopRight>
          <StyledReviewsBoxTopRightRating>
            {box.rating}
          </StyledReviewsBoxTopRightRating>
          <FontAwesomeIcon
            style={{ marginLeft: '1rem', color: '#FEA250' }}
            icon={faStar}
            size="2x"
          />
        </StyledReviewsBoxTopRight>
      </StyledReviewsBoxTop>

      <StyledReviewsBoxBottom>
        <StyledReviewsBoxBottomComment>
          {box.comment}
        </StyledReviewsBoxBottomComment>
      </StyledReviewsBoxBottom>
    </StyledReviewsBox>
  );
}

const StyledReviewsBox = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	margin-right: 3rem;
	border: 1px solid gray;
	border-radius: 0.5rem;
	padding: 3rem;
	min-width: 40rem;
`;

const StyledReviewsBoxTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
const StyledReviewsBoxTopLeft = styled.div`
	border-radius: 50%;
	display: flex;
	align-items: center;
`;
const StyledReviewsBoxTopLeftImage = styled.img`
	width: 5rem;
	height: 5rem;
	object-fit: cover;
`;
const StyledReviewsBoxTopLeftContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin-left: 1rem;
`;
const StyledReviewsBoxTopLeftContentName = styled.h3`
	font-style: normal;
	font-weight: 500;
	font-size: 1.6rem;
	line-height: 2rem;
	color: #0b132a;
`;
const StyledReviewsBoxTopLeftContentLocation = styled.p`
	font-size: 1.3rem;
	line-height: 2rem;

	color: #4f5665;
`;
const StyledReviewsBoxTopRight = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const StyledReviewsBoxTopRightRating = styled.p`
	font-size: 1.6rem;
	color: #0b132a;
`;
const StyledReviewsBoxBottom = styled.div`
	margin: 1rem 0rem;
`;
const StyledReviewsBoxBottomComment = styled.p`
	text-align: left;
	font-size: 1.5rem;
	line-height: 3rem;
	color: #0b132a;
`;

export default ReviewsBox;
