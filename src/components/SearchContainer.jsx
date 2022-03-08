import React, { useState } from 'react';
import { getProducts, getRegions } from '../axios/axios';
import { searchKeyword } from '../utils/searchKeyword';
import { setProductsData, setRegionsData } from '../action';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, setItems } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';
//key : 원피스
//value : {productsData : [...], regionsData : [...]}

const SearchContainer = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState('');
  const { productsData, regionsData } = useSelector(state => ({
    productsData: state.data.productsData,
    regionsData: state.data.regionsData,
  }));
  const navigate = useNavigate();

  const fetchData = async () => {
    console.log('api 요청이 실행됩니다.');
    const products = await getProducts();
    const regions = await getRegions();
    return { products, regions };
  };

  function checkUrlForm(strUrl) {
    /* eslint-disable */
    let regex = new RegExp(
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
    );
    return regex.test(strUrl);
  }

  const filterProductsUrlOrNumber = (products, regionsFilterData) =>
    products.filter(({ category_names }) => {
      return (
        JSON.stringify(category_names) ===
        JSON.stringify(regionsFilterData?.category_names)
      );
    });

  const filterRegionsUrlOrNumber = (regions, text) =>
    regions.filter(({ product_code, image_url }) => {
      return image_url === text || product_code === Number(text);
    })[0];

  const filterProductsText = (products, searchKeyword, text) =>
    products.filter(({ name, category_names }) => {
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

  const getData = async text => {
    if (getItems(text)) {
      const { products, regions } = getItems(text);
      dispatch(setProductsData(products));
      dispatch(setRegionsData(regions));
    } else {
      const { products, regions } = await fetchData();
      if (checkUrlForm(text) || Number.isInteger(Number(text))) {
        const regionsFilterData = filterRegionsUrlOrNumber(regions, text);
        const productsFilterArr = filterProductsUrlOrNumber(
          products,
          regionsFilterData,
        );
        setItems(text, {
          products: productsFilterArr,
          regions: regionsFilterData,
        });
        dispatch(setProductsData(productsFilterArr));
        dispatch(setRegionsData(regionsFilterData));
      } else {
        const productsFilterArr = filterProductsText(
          products,
          searchKeyword,
          text,
        );
        setItems(text, {
          products: productsFilterArr,
          regions: {},
        });
        dispatch(setProductsData(productsFilterArr));
        dispatch(setRegionsData({}));
      }
    }
    navigate(`/list/${text}`);
  };

  const keyup = ({ code, target }) => {
    if (code === 'Enter') {
      //Todo : 2page와 3page간 enter 입력시 page이동 유무 차이
      const text = target.value;
      getData(text);
    }
  };

  const clickBtn = text => {
    //Todo : 2page와 3page간 enter 입력시 page이동 유무 차이
    getData(text);
  };
  const change = ({ target }) => {
    setInputs(target.value);
  };
  return (
    <div>
      <input type='text' onKeyUp={keyup} onChange={change} />
      <button onClick={() => clickBtn(inputs)}>검색</button>
    </div>
  );
};

export default SearchContainer;
