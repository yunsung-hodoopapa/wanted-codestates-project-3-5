import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PageNation = ({ totalPage, page, setPage }) => {
  return (
    <PageNationConatiner>
      <PageNationButton
        onClick={() => {
          if (page > 5) {
            setPage(page - 5);
          }
        }}
      >
        왼쪽
      </PageNationButton>
      <PageNationButton>{page}</PageNationButton>
      <PageNationButton>{page + 1}</PageNationButton>
      <PageNationButton>{page + 2}</PageNationButton>
      <PageNationButton>{page + 3}</PageNationButton>
      <PageNationButton>{page + 4}</PageNationButton>
      <PageNationButton
        onClick={() => {
          if (totalPage > page + 4) {
            setPage(page + 5);
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
};
export default PageNation;
