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
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  };

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
                  <ItemImg>
                    <img src={el.image_url} />
                  </ItemImg>
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
  max-width: 1080px;
  min-width: 420px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const Item = styled.div`
  width: 200px;
  height: 400px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  overflow: hidden;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ItemImg = styled.div`
  width: 100%;
  height: 310px;
  background-color: #eee;
  overflow: hidden;

  img {
    /* max-width: 200px; */
    /* max-height: 310px; */
    object-fit: contain;
  }
`;
const ItemName = styled.div`
  margin: 10px;
  color: #333;
`;
const ItemPrice = styled.div`
  color: var(--main-color);
  font-weight: bold;
  margin: 20px;
  text-align: right;
`;

export default Results;
