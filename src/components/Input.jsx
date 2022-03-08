import React, { useState, useEffect } from 'react';
import { getProducts, getRegions } from '../axios/axios';
import { searchKeyword } from '../utils/searchKeyword';
import { setProductsData, setRegionsData } from '../action';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, setItems } from '../utils/localStorage';
//key : 원피스
//value : {productsData : [...], regionsData : [...]}

const Input = () => {
  const dispatch = useDispatch();

  const { productsData, regionsData } = useSelector(state => ({
    productsData: state.data.productsData,
    regionsData: state.data.regionsData,
  }));

  useEffect(() => {
    console.log(productsData, regionsData);
  }, [productsData, regionsData]);

  const fetchData = async () => {
    console.log('api 요청이 실행됩니다.');
    const products = await getProducts();
    const regions = await getRegions();
    return [products, regions];
  };

  function checkUrlForm(strUrl) {
    /* eslint-disable */
    let regex = new RegExp(
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
    );
    return regex.test(strUrl);
  }

  const keyup = async ({ code, target }) => {
    if (code === 'Enter') {
      //Todo : 2page와 3page간 enter 입력시 page이동 유무 차이
      const text = target.value;
      //Todo : localStorage 확인
      let products, regions;

      if (getItems(text)) {
        const state = getItems(text);
        products = state.products;
        regions = state.regions;
        dispatch(setProductsData(products));
        dispatch(setRegionsData(regions));
      } else {
        [products, regions] = await fetchData();

        // urlText or contentText
        if (checkUrlForm(text) || Number.isInteger(Number(text))) {
          // obj or undefined
          const searchRegionData = regions.filter(
            ({ product_code, image_url }) => {
              return image_url === text || product_code === Number(text);
            },
          )[0];
          const productFilterArr = products.filter(({ category_names }) => {
            return (
              JSON.stringify(category_names) ===
              JSON.stringify(searchRegionData?.category_names)
            );
          });
          setItems(text, {
            products: productFilterArr,
            regions: searchRegionData,
          });
          dispatch(setProductsData(productFilterArr));
          dispatch(setRegionsData(searchRegionData));
        } else {
          const filterArr = products.filter(({ name, category_names }) => {
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
          setItems(text, {
            products: filterArr,
            regions: {},
          });
          dispatch(setProductsData(filterArr));
        }
      }
    }
  };

  return (
    <>
      <input type='text' onKeyUp={keyup} />
    </>
  );
};

export default Input;
