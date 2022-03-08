import React, { useRef } from 'react';
import styled from 'styled-components';
import Results from '../components/render/Results';
import SearchBar from '../components/render/SearchBar';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const navigate = useNavigate();
  const hiddenButton = useRef(null);

  const handleClick = () => {
    hiddenButton.current.click();
  };

  const onHandleNavigate = () => {
    console.log('이동!');
    navigate('/');
  };

  return (
    <>
      <HeaderSection>
        <ImageWrap
          src={'https://oddconcepts.kr/wp-content/uploads/2020/05/pxl_logo.png'}
          onClick={handleClick}
        >
          <button
            onClick={onHandleNavigate}
            ref={hiddenButton}
            style={{ display: 'none' }}
          />
        </ImageWrap>
        <SearchBar />
      </HeaderSection>
      <Results />
    </>
  );
};

const HeaderSection = styled.header`
  max-width: 1080px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`;

const ImageWrap = styled.div`
  width: 116px;
  height: 44px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
  cursor: pointer;
`;

export default UserPage;
