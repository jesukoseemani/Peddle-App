import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import GithubUserInfo from '../components/GithubUserInfo';
import useSearchScroll from '../components/useSearchScroll';

function GithubUsersInfo() {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    users, hasMore, loading, error,
  } = useSearchScroll(pageNumber);

  const observer = useRef();
  const lastUserElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  return (
    <>
      <StyledGithubUsersWrapper>
        {users.map((dataItem, index) => {
          if (users.length === index + 1) {
            return (
              <GithubUserInfo
                parentref={lastUserElementRef}
                item={dataItem}
                key={index}
              />
            );
          }
          return <GithubUserInfo item={dataItem} key={index} />;
        })}
      </StyledGithubUsersWrapper>
      <div style={{ color: 'green', fontSize: '1.5rem' , textAlign: 'center', margin: '2rem 0rem'}}>
        {loading && 'Loading...'}
      </div>
      <div style={{ color: 'red', fontSize: '1.5rem' , textAlign: 'center', margin: '2rem 0rem'}}>{error && 'Error'}</div>
    </>
  );
}
const StyledGithubUsersWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	padding: 2rem 0rem;
	width: 100%;
`;

export default GithubUsersInfo;
