import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IoChevronForwardSharp } from 'react-icons/io5';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

const PageNation = ({ totalPage, page, setPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const shownPage = useRef(1);
  const location = useLocation();
  const search = location.search.split('/')[0];
  const [nowPage, setNowPage] = useState(0);
  const Itemarr = [];
  for (let i = 0; i < totalPage; i++) {
    Itemarr.push(i);
  }
  // console.log(Itemarr);
  return (
    <PageNationConatiner>
      <PageNationArrowButton
        onClick={() => {
          if (page > 5) {
            setPage(page - 5);
            if (shownPage.current >= 6) {
              shownPage.current = page - 5;
              setNowPage(0);
              setCurrentPage(shownPage.current);
              navigate(
                `/question1/search${search}/list&page=${shownPage.current}`,
              );
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
              setCurrentPage(page + index);
              setNowPage(index);
              navigate(`/question1/search${search}/list&page=${page + index}`);
            }}
            className={index === nowPage ? 'focused' : null}
          >
            {page + index <= totalPage ? page + index : null}
          </PageNationButton>
        );
      })}
      <PageNationArrowButton
        onClick={() => {
          if (totalPage >= page + 4) {
            setPage(page + 5);
            shownPage.current = page + 5;
            setNowPage(0);
            setCurrentPage(shownPage.current);
            navigate(
              `/question1/search${search}/list&page=${shownPage.current}`,
            );
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
  margin: 0 auto;
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

  &.focused {
    border: 1px solid silver;
    border-radius: 50%;
  }
`;

PageNation.propTypes = {
  totalPage: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
  setCurrentPage: PropTypes.func,
};
export default PageNation;
