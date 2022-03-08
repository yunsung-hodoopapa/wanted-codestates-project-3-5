import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PageNation = ({ totalPage, page, setPage, setCurrentPage }) => {
  const button1 = document.querySelector('#button1');
  const button2 = document.querySelector('#button2');
  const button3 = document.querySelector('#button3');
  const button4 = document.querySelector('#button4');
  const button5 = document.querySelector('#button5');
  const shownPage = useRef(1);
  return (
    <PageNationConatiner>
      <PageNationButton
        onClick={() => {
          if (page > 5) {
            setPage(page - 5);
            if (shownPage.current >= 6) {
              shownPage.current = page - 5;
              setCurrentPage(shownPage.current);
            }
          }
        }}
      >
        왼쪽
      </PageNationButton>
      <PageNationButton
        id='button1'
        value={page}
        onClick={() => {
          setCurrentPage(button1.textContent);
        }}
      >
        {page}
      </PageNationButton>
      <PageNationButton
        id='button2'
        value={page + 1}
        onClick={() => {
          setCurrentPage(button2.textContent);
        }}
      >
        {page + 1}
      </PageNationButton>
      <PageNationButton
        id='button3'
        value={page + 2}
        onClick={() => {
          setCurrentPage(button3.textContent);
        }}
      >
        {page + 2}
      </PageNationButton>
      <PageNationButton
        id='button4'
        value={page + 3}
        onClick={() => {
          setCurrentPage(button4.textContent);
        }}
      >
        {page + 3}
      </PageNationButton>
      <PageNationButton
        id='button5'
        value={page + 4}
        onClick={() => {
          setCurrentPage(button5.textContent);
        }}
      >
        {page + 4}
      </PageNationButton>
      <PageNationButton
        onClick={() => {
          if (totalPage > page + 4) {
            setPage(page + 5);
            shownPage.current = page + 5;
            setCurrentPage(shownPage.current);
          } else {
            alert('최대 페이지 입니다.');
          }
        }}
      >
        오른쪽
      </PageNationButton>
    </PageNationConatiner>
  );
};

const PageNationConatiner = styled.div`
  text-align: center;
  margin-top: 10vh;
`;
const PageNationButton = styled.button`
  font-weight: bold;
`;

PageNation.propTypes = {
  totalPage: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
  setCurrentPage: PropTypes.func,
};
export default PageNation;
