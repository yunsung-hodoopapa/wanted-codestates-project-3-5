import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IoChevronForwardSharp } from 'react-icons/io5';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

const PageNation = ({ totalPage, page, setPage, setCurrentPage }) => {
  const navigate = useNavigate();
  // console.log('totalPage : ', totalPage);
  const shownPage = useRef(1);
  const location = useLocation();
  const pathname = location.pathname.split('/');
  const search = location.search.split('/')[0];

  const Itemarr = [];
  for (let i = 0; i < totalPage; i++) {
    Itemarr.push(i);
  }

  return (
    <PageNationConatiner>
      <PageNationArrowButton
        onClick={() => {
          if (page > 5) {
            setPage(page - 5);
            if (shownPage.current >= 6) {
              shownPage.current = page - 5;
              // navigate(`${url}:page=${shownPage.current}`);
              // navigate(
              //   `/question1/search?=keyword=/list:page=${shownPage.current}`,
              // );
              navigate(`/question1/search${search}/:page=${shownPage.current}`);
              setCurrentPage(shownPage.current);
            }
          }
        }}
      >
        <IoChevronBackOutline />
      </PageNationArrowButton>

      {Itemarr.slice(0, 5).map((el, index) => {
        return (
          <PageNationButton
            id='button1'
            value={page + index}
            key={page + index}
            onClick={() => {
              // navigate(`${location.pathname}${location.search}${page + index}`);
              navigate(`/question1/search${search}/:page=${page + index}`);
              // navigate(`${url}:keyword=${page + index}`);
              setCurrentPage(page + index);
            }}
          >
            {page + index}
          </PageNationButton>
        );
      })}
      <PageNationArrowButton
        onClick={() => {
          // console.log(button1.textContent);
          if (totalPage >= page + 4) {
            setPage(page + 5);
            shownPage.current = page + 5;
            navigate(`/question1/search${search}/:page=${shownPage.current}`);
            setCurrentPage(shownPage.current);
          } else {
            alert('최대 페이지 입니다.');
          }
        }}
      >
        <IoChevronForwardSharp />
      </PageNationArrowButton>
    </PageNationConatiner>
  );
};

const PageNationConatiner = styled.div`
  text-align: center;
  margin-top: 5vh;
`;
const PageNationArrowButton = styled.button`
  font-weight: bold;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 0.8em;
  margin-bottom: 50px;
`;
const PageNationButton = styled.button`
  font-weight: bold;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 50px;
`;

PageNation.propTypes = {
  totalPage: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
  setCurrentPage: PropTypes.func,
};
export default PageNation;
