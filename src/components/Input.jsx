import React, { useState, useEffect } from 'react';
import { getProducts, getRegions } from '../axios/axios';
import { searchKeyword } from '../utils/searchKeyword';
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
      const text = target.value;
      const filterArr = apiProductData.filter(({ name, category_names }) => {
        let isExist = false;
        if (name.includes(text)) {
          isExist = true;
        } else if (searchKeyword[text]) {
          category_names.map(category => {
            searchKeyword[text].map(val => {
              if (category.includes(val)) isExist = true;
            });
          });
        }
        return isExist;
      });
      console.log(filterArr);
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
