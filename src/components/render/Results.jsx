import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getProducts } from '../../axios/axios';
import Skeleton from './Skeleton';
import PageNation from './PageNation';
import theme from '../../styles/theme';

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

  const setFlag = () => {
    setIsLoaded(false)
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }

  console.log(isLoaded);


  return (
    <ThemeProvider theme={theme}>
      {/* to do : flex box or grid div 추가 */}
      <ItemContainer>
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
        setFlag={setFlag}

      />
    </ThemeProvider>
  );
};

console.log(theme.device.tablet);

const ItemContainer = styled.div`
  max-width: 1280px;
  min-width: 420px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 5px;
`;

const Item = styled.div`
  width: 230px;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ItemImg = styled.img`
  width: 200px;
  height: 300px;
  margin-top: 20px;
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
