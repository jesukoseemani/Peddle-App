import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ReviewsBox from '../components/ReviewsBox';
import { StyledContent, StyledHeading } from '../styles/ReuseableStyles';
import man1 from '../images/man1.png';
import man2 from '../images/man2.png';
import woman1 from '../images/woman1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
	firstBreakOutHomePage,
	ThirdBreakOutHomePage,
	FourthBreakOutHomePage,
} from '../styles/MediaQueries';

function Reviews() {
	const [active, setActive] = useState(false);
	const ref = useRef(null);

	const handleClick = (direction) => {
		let scrollRef = ref.current;

		if (direction === 'left') {
			if (scrollRef) {
				scrollRef.scrollLeft -= 200;
				setActive(true);
			} else {
				scrollRef = null;
				setActive(false);
			}
		} else {
			if (scrollRef) {
				scrollRef.scrollLeft += 200;
				setActive(true);
			} else {
				scrollRef = null;
				setActive(false);
			}
		}
	};

	const data = [
		{
			image: `${man2}`,
			name: 'Viezh Robert',
			location: 'Warsaw, Poland',
			comment:
				'“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”',
			rating: 4.5,
			active: true,
			id: 1,
		},
		{
			image: `${woman1}`,
			name: 'Yessica Christy',
			location: 'Shanxi, China',
			comment:
				'“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”',
			rating: 4.5,
			active: false,
			id: 2,
		},
		{
			image: `${man1}`,
			name: 'Kim Young Jou',
			location: 'Seoul, South Korea',
			comment:
				'“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”',
			rating: 4.5,
			active: false,
			id: 3,
		},
		{
			image: `${woman1}`,
			name: 'Kanyinsola Glue',
			location: 'Ibadan, Nigeria',
			comment:
				'“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”',
			rating: 4.5,
			active: false,
			id: 4,
		},
		{
			image: `${man1}`,
			name: 'Brick Cage',
			location: 'Shanxi, China',
			comment:
				'“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”',
			rating: 4.5,
			active: false,
			id: 5,
		},
		{
			image: `${man2}`,
			name: 'Olowo kosh',
			location: 'Lagos, Nigeria',
			comment:
				'“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”',
			rating: 4.5,
			active: false,
			id: 6,
		},
	];

	return (
		<StyledReviews>
			<StyledReviewsHeading>
				Trusted by Thousands of Happy Customer
			</StyledReviewsHeading>
			<StyledReviewsContent>
				Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse et
				suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies.
			</StyledReviewsContent>
			<StyledReviewsBox ref={ref}>
				{data.map((item) => (
					<ReviewsBox box={item} key={item.id} />
				))}
			</StyledReviewsBox>

			<Switch>
				<div
					className='wrapper'
					style={{
						backgroundColor: active ? '#ba55d3' : '',
						color: active ? '#ffffff' : '',
					}}
					onClick={() => handleClick('left')}>
					<FontAwesomeIcon className='arrow' icon={faArrowLeft} size='2x' />
				</div>

				<div
					className='wrapper'
					style={{
						backgroundColor: active ? '#ba55d3' : '',
						color: active ? '#ffffff' : '',
					}}
					onClick={() => handleClick('right')}>
					<FontAwesomeIcon className='arrow' icon={faArrowRight} size='2x' />
				</div>
			</Switch>
		</StyledReviews>
	);
}

const StyledReviews = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	text-align: center;
	background-color: #ffffff;
	padding: 0rem 10rem;
	padding-bottom: 10rem;

	${FourthBreakOutHomePage({
		padding: '0rem .5rem',
		paddingBottom: '20rem',
	})}
`;

const StyledReviewsHeading = styled(StyledHeading)`
	width: 40%;

	${firstBreakOutHomePage({
		width: '60%',
	})}

	${ThirdBreakOutHomePage({
		width: '70%',
	})}

	${FourthBreakOutHomePage({
		width: '100%',
	})}
`;

const StyledReviewsContent = styled(StyledContent)`
	width: 45%;

	${firstBreakOutHomePage({
		width: '60%',
	})}

	${ThirdBreakOutHomePage({
		width: '70%',
	})}
`;

const StyledReviewsBox = styled.div`
	display: flex;
	margin: 3rem 0rem;
	width: 100%;
	overflow-x: scroll;
	transition: all 250ms ease;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none;
	}
`;

const Switch = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 80%;

	.wrapper {
		border: 3px solid #ba55d3;
		padding: 1rem;
		border-radius: 50%;
		margin: 3rem 1rem;
		color: #ba55d3;
		cursor: pointer;
	}
`;

export default Reviews;
