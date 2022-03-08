import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const QuestionSelectLinkBox = styled.div`
  display:flex;
  width:100vw;
  height:100vh;
  div {
    width:50%;
    height:100%;
    &:nth-of-type(1) {
      background-image: url('img/question1.png');
    }
    &:nth-of-type(2) {
      background-image: url('img/question2.png');
    }
    a {
      display:block;
      width:100%;
      height:100%;
      text-align: center;
      
    }
  }
`

function Main() {
  return (
    <QuestionSelectLinkBox>
      <div><Link to="/question1">1번과제</Link></div>
      <div><Link to="/question2">2번과제</Link></div>
    </QuestionSelectLinkBox>
  );
}

export default Main;
