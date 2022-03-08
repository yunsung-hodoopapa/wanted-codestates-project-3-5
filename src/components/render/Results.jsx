import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getProducts } from '../../axios/axios';
import Skeleton from './Skeleton';
import PageNation from './PageNation';

const Results = () => {
  const [_data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const getDataFromJson = async () => {
    const data = await getProducts().then(data => {
      setTimeout(() => {
        setData(data);
        setIsLoaded(true);
      }, 2000);
    });
  };
  const totalPage = Math.ceil(_data.length / 15);
  useEffect(() => {
    getDataFromJson();
  }, []);

  return (
    <div>
      <ItemContainer>
        {/* flex box or grid */}
        {isLoaded ? (
          _data
            .slice(0 + 15 * (currentPage - 1) + 1, 15 * currentPage + 1)
            .map((el, index) => {
              return (
                <Item key={index}>
                  <ItemImg src={el.image_url} />
                  <ItemName>{el.name}</ItemName>
                  <ItemPrice>{el.price}₩</ItemPrice>
                </Item>
              );
            })
        ) : (
          <Skeleton />
        )}
      </ItemContainer>
      <PageNation
        totalPage={totalPage}
        page={page}
        setPage={setPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

const ItemContainer = styled.div`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const Item = styled.div`
  width: 200px;
  height: 400px;
  border: 1px solid black;
  margin-bottom: 20px;
`;
const ItemImg = styled.img`
  width: 200px;
  height: 300px;
`;
const ItemName = styled.div`
  margin: 10px;
`;
const ItemPrice = styled.div`
  color: blue;
  font-weight: bold;
  margin: 20px;
  text-align: right;
`;

export default Results;
