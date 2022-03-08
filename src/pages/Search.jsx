import React from 'react';
import Input from '../components/Input';
import styled from 'styled-components';
import Header from '../components/Header';

const SearchWrapper = styled.div`
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
`

const Search = () => {
  return (
    <>
      <Header />
      <SearchWrapper>
        <Input />
        <button>검색</button>
      </SearchWrapper>
    </>

  );
};

export default Search;