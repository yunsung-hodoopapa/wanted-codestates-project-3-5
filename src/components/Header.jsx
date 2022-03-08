import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position:fixed;
  top:0;
  h1 {
    a {
      display:block;
      padding:20px;
    }
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <h1><Link to="/"><img src="../img/logo.png" alt="" /></Link></h1>
    </HeaderWrapper>
  );
};

export default Header;