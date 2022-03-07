import React, { useState, useEffect } from 'react';
import { getProducts, getRegions } from '../axios/axios';
const Input = () => {
  const [apiProductData, setApiProductData] = useState([]);
  const [apiRegionsData, setApiRegionsData] = useState([]);
  useEffect(async () => {
    const products = await getProducts();
    const regions = await getRegions();
    setApiProductData(products);
    setApiRegionsData(regions);
  }, []);

  const keyup = ({ code, target }) => {
    if (code === 'Enter') {
      //Todo : 2page와 3page간 enter 입력시 page이동 유무 차이
      console.log(target.value);
    }
  };

  useEffect(() => {
    console.log(apiProductData);
  }, [apiProductData]);

  useEffect(() => {
    console.log(apiRegionsData);
  }, [apiRegionsData]);

  return (
    <>
      <input type="text" onKeyUp={keyup} />
    </>
  );
};

export default Input;
