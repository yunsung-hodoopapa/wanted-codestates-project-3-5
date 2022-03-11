import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Skeleton from './Skeleton';
import PageNation from './PageNation';
import DetailView from './DetailView';
import theme from '../../styles/theme';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
      <Container>
        <PageWrap>
          {regionsData && Object.entries(regionsData).length > 0 && (
            <DetailView />
          )}
          <ItemContainer>
            {isLoaded ? (
              data
                .slice(0 + 15 * (currentPage - 1) + 1, 15 * currentPage + 1)
                .map(el => {
                  const { product_code, name, image_url, price } = el;
                  return (
                    <Item key={product_code}>
                      <ItemImg>
                        <a href={image_url} target='_blank' rel='noreferrer'>
                          <img src={image_url} />
                        </a>
                      </ItemImg>
                      <DescBox>
                        <ItemName>{name}</ItemName>
                        <ItemPrice>{price}₩</ItemPrice>
                      </DescBox>
                    </Item>
                  );
                })
            ) : (
              <Skeleton />
            )}
            <div></div>
            <div></div>
            <PageNation
              totalPage={Number(totalPage)}
              page={page}
              setPage={setPage}
              setCurrentPage={setCurrentPage}
              setFlag={setFlag}
            />
          </ItemContainer>
        </PageWrap>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`;

const PageWrap = styled.div`
  display: flex;
  max-width: 1080px;
  min-width: 640px;
`;

const ItemContainer = styled.div`
  max-width: 1080px;
  min-width: 420px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`;

const Item = styled.div`
  width: 200px;
  height: 400px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  background-color: #fff;
  overflow: hidden;
  border-radius: 6px;
`;

const ItemImg = styled.div`
  width: 100%;
  height: 310px;
  background-color: #eee;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;

  img {
    width: 200px;
    max-width: 100%;
    height: 310px;
    object-fit: cover;
    transition: all 0.3s;
  }

  &:hover span {
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(20, 20, 20, 0.3);
    transition: all 0.3s;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const DescBox = styled.div`
  width: 100%;
  height: 88px;
  position: relative;
`;

const ItemName = styled.div`
  color: #333;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 14px;
`;

const ItemPrice = styled.div`
  color: var(--main-color);
  font-weight: bold;
  text-align: right;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export default Results;
