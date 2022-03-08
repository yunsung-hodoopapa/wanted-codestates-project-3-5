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
  }));

  console.log('productsData', productsData);
  console.log('regionsData', regionsData);

  const getTotalPage = (productsData, regionsData) => {
    if (productsData?.length) {
      setTotalPage(Math.ceil(productsData.length / 15));
    }
    if (regionsData?.length) {
      setTotalPage(Math.ceil(regionsData.length / 15));
    }
  };

  const getDataFromApi = async (productsData, regionsData) => {
    if (productsData.length) {
      await setData(productsData);
    } else if (regionsData.length) {
      await setData(regionsData);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      getTotalPage();
      getDataFromApi(productsData, regionsData);
    }, 2000);
  }, []);

  const setFlag = () => {
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  };

  return (
    <ThemeProvider theme={theme}>
      <PageWrap>
        {regionsData.length && <DetailView />}
        <ItemContainer>
          {isLoaded ? (
            data
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
      </PageWrap>
      <PageNation
        totalPage={Number(totalPage)}
        page={page}
        setPage={setPage}
        setCurrentPage={setCurrentPage}
        setFlag={setFlag}
      />
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
