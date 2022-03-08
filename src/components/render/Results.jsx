import React, { useState, useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Skeleton from './Skeleton';
import PageNation from './PageNation';
import DetailView from './DetailView';
import theme from '../../styles/theme';
import { useSelector } from 'react-redux';

const Results = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalPage, setTotalPage] = useState('');

  const { productsData, regionsData } = useSelector(state => ({
    productsData: state.data.productsData,
    regionsData: state.data.regionsData,
    isLoaded: state.data.isLoaded,
  }));

  console.log(productsData, regionsData);

  const getTotalPage = () => {
    if (productsData?.length) {
      setTotalPage(Math.ceil(productsData.length / 15));
    }
    if (regionsData?.length) {
      setTotalPage(Math.ceil(regionsData.length / 15));
    }
  };

  const getDataFromApi = () => {
    if (productsData && productsData.length) {
      setData(productsData);
      setIsLoaded(true);
    } else if (regionsData && Object.entries(regionsData).length) {
      setData(Object.entries(regionsData).length);
      setIsLoaded(true);
    }
  };

  const setFlag = () => {
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  };

  useEffect(() => {
    setIsLoaded(false);
    setTimeout((productsData, regionsData) => {
      getTotalPage();
      getDataFromApi(productsData, regionsData);
    }, 2000);
  }, [productsData, regionsData]);

  return (
    <ThemeProvider theme={theme}>
      <PageWrap>
        {regionsData && Object.entries(regionsData).length > 0 && (
          <DetailView />
        )}
        <ItemContainer>
          {isLoaded ? (
            data
              .slice(0 + 15 * (currentPage - 1) + 1, 15 * currentPage + 1)
              .map((el, index) => {
                return (
                  <Item key={index}>
                    <ItemImg
                      src={el.image_url}
                    />
                    <ItemName>{el.name}</ItemName>
                    <ItemPrice>{el.price}₩</ItemPrice>
                  </Item>
                );
              })
          ) : (
            <Skeleton />
          )}
          <PageNation
            totalPage={Number(totalPage)}
            page={page}
            setPage={setPage}
            setCurrentPage={setCurrentPage}
            setFlag={setFlag}
          />
        </ItemContainer>
      </PageWrap>
    </ThemeProvider>
  );
};

console.log(theme.device.tablet);

const PageWrap = styled.div`
  display: flex;
  max-width: 1280px;
  min-width: 420px;
`;

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
