import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getProducts } from '../../axios/axios';
import Skeleton from './Skeleton';

const Results = () => {
  const [_data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getDataFromJson = async () => {
    const data = await getProducts().then(data => {
      setTimeout(() => {
        setData(data);
        setIsLoaded(true);
      }, 2000);
    });
  };

  useEffect(() => {
    getDataFromJson();
  }, []);

  console.log(_data);

  return (
    <Wrap>
      {isLoaded ? (
        _data.map((item, index) => {
          const { product_code, name, image_url, price } = item;
          return (
            <ImageWrap key={index} src={image_url}>
              <p>{name}</p>
              <p>{product_code}</p>
              <p>{price}</p>
            </ImageWrap>
          );
        })
      ) : (
        <Skeleton />
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 1080px;
  margin: 20px auto;
  height: 700px;
  border: 1px solid blue;
`;

const ImageWrap = styled.div`
  text-align: center;
  background-size: contain;
  background: no-repeat center;
  background-image: url(${props => props.src});
  margin: 2px 2px;
  p {
    color: white;
  }
`;

export default Results;
