import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import SearchContainer from '../components/SearchContainer';

const SearchWrapper = styled.div`
  margin-top:12%;
  text-align:center;
  p {
    margin:20px;
    font-size:2.5rem;
    color:#4b4b4b;
  }
  &>div {
    width:1000px;
    display:flex;
    justify-content:space-around;
    align-items: center;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    input {
    width:700px;
    box-sizing:border-box;
    padding:20px;
    border-radius:30px;
    border:none;
    box-shadow: 1px 5px 10px 3px #ebebeb;
    font-size:1.1rem;
  }
  button {
    background-color:#5F46F8;
    border:0;
    border-radius: 5px;
    color:white;
    padding:10px 30px;
    font-size:1rem;
    cursor:pointer;
  }
  }
 
`

const Search = () => {
  return (
    <>
      <Header />
      <SearchWrapper>
        <p>Artificial Intelligence</p>
        <p>PXL Fashion Viewer</p>
        <SearchContainer />
      </SearchWrapper>
    </>

  )
}
export default Search;
