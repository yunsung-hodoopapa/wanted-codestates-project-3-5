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
      position:relative;
      transition: all 0.3s;
      &:hover {
        background-color:#33333371;
      }
      span {
        position:absolute;
        top:50%; left:50%;
        transform: translate(-50%, -50%);
        color:white;
        font-size:2rem;
      }
    }
  }
`

function Main() {
  return (
    <QuestionSelectLinkBox>
      <div><Link to="/question1"><span>1번과제</span></Link></div>
      <div><Link to="/question2"><span>2번과제</span></Link></div>
    </QuestionSelectLinkBox>
  );
}

export default Main;
