import React, { useRef } from 'react';
import styled from 'styled-components';
import Results from '../components/render/Results';
import { useNavigate } from 'react-router-dom';
import SearchContainer from '../components/SearchContainer';

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
        <SearchContainer />
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
  input {
    width: 300px;
    height: 30px;
    box-sizing: border-box;
    padding: 20px;
    margin-right: 20px;
    border-radius: 30px;
    border: none;
    box-shadow: 1px 5px 10px 3px #ebebeb;
    font-size: 1.1rem;
  }
  button {
    background-color: #5f46f8;
    border: 0;
    border-radius: 5px;
    color: white;
    padding: 10px 30px;
    font-size: 1rem;
    cursor: pointer;
  }
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
