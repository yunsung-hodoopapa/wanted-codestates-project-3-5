import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import SearchContainer from '../components/SearchContainer';

const SearchPage = styled.div`
  position:relative;
  width:100vw;
  height:100vh;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`

const SearchWrapper = styled.div`
  text-align:center;
  p {
    padding:10px;
    font-size:2.5rem;
    color:#4b4b4b;
    &:nth-of-type(1) {
      padding-top:25vh;
      @media ${(props) => props.theme.device.tablet} {
        padding-top:30vh;
      }
    }
    @media ${(props) => props.theme.device.tablet} {
        font-size:2.2rem;
    }
  }
  &>div {
    width:45vw;
    display:flex;
    justify-content:space-around;
    align-items: center;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width:1220px) {
      width:65vw;
    }
    @media ${(props) => props.theme.device.tablet} {
      width:500px;
      padding:10px;
    }
      input {
      flex-grow:9;
      box-sizing:border-box;
      padding:15px 40px;
      border-radius:30px;
      border:none;
      box-shadow: 1px 5px 10px 3px #ebebeb;
      font-size:1.1rem;
      margin-right:30px;
      
      @media ${(props) => props.theme.device.tablet} {
        width:400px;
        padding:15px;
      }
    }
    button {
      flex-grow:1;
      background-color:#5F46F8;
      border:0;
      border-radius: 5px;
      color:white;
      padding:10px 30px;
      font-size:0.9rem;
      cursor:pointer;
      @media ${(props) => props.theme.device.tablet} {
        padding:15px 20px;
        font-size:0.8rem;
      }
    }
  }
`

const Search = () => {
  return (
    <SearchPage>
      <Header />
      <SearchWrapper>
        <p>Artificial Intelligence</p>
        <p>PXL Fashion Viewer</p>
        <SearchContainer />
      </SearchWrapper>
    </SearchPage>

  )
}
export default Search;
