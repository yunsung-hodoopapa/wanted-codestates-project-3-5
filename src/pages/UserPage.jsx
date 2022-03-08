import React, { useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Results from '../components/render/Results';
import { useNavigate } from 'react-router-dom';
import SearchContainer from '../components/SearchContainer';
import theme from '../styles/theme';

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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

const HeaderSection = styled.header`
  width: 100%;
  min-width: 60%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  @media ${({ theme }) => theme.device.tablet} {
    justify-content: space-between;
  }
  align-items: center;
  margin: 0 10px;
  input {
    width: 400px;
    height: 30px;
    box-sizing: border-box;
    padding: 20px;
    margin-right: 20px;
    border-radius: 30px;
    border: none;
    box-shadow: 1px 5px 10px 3px #ebebeb;
    font-size: 1.1rem;
    @media ${({ theme }) => theme.device.tablet} {
      width: 50%;
    }
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
