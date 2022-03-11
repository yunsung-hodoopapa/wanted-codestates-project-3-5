import React from 'react';
import { getProducts, getRegions } from '../axios/axios';
import { searchKeyword } from '../utils/searchKeyword';
import { setProductsData, setRegionsData, setSearchTextData } from '../action';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, setItems } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchText } = useSelector(state => ({
    searchText: state.data.searchText,
  }));

  const fetchData = async () => {
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
    const type = checkUrlForm(text)
      ? 'image_url'
      : Number.isInteger(Number(text))
      ? 'product_code'
      : 'keyword';
    if (getItems(text)) {
      const { products, regions } = getItems(text);
      dispatch(setProductsData(products));
      dispatch(setRegionsData(regions));
      navigate(`/question1/search?=${type}=${searchText}/list`);
    } else {
      const { products, regions } = await fetchData();
      if (checkUrlForm(text) || Number.isInteger(Number(text))) {
        const regionsFilterData = filterRegionsUrlOrNumber(regions, text);
        const productsFilterArr = filterProductsUrlOrNumber(
          products,
          regionsFilterData,
        );

        if (productsFilterArr.length === 0) {
          alert('검색 결과가 없습니다.');
        } else {
          setItems(text, {
            products: productsFilterArr,
            regions: regionsFilterData,
          });
          dispatch(setProductsData(productsFilterArr));
          dispatch(setRegionsData(regionsFilterData));

          navigate(`/question1/search?=${type}=${searchText}/list`);
        }
      } else {
        const productsFilterArr = filterProductsText(
          products,
          searchKeyword,
          text,
        );

        if (productsFilterArr.length === 0) {
          //Todo : 2번씩 alert이 뜬다.
          alert('검색 결과가 없습니다.');
        } else {
          setItems(text, {
            products: productsFilterArr,
            regions: {},
          });
          dispatch(setProductsData(productsFilterArr));
          dispatch(setRegionsData({}));
          navigate(`/question1/search?=${type}=${searchText}/list`);
        }
      }
    }
  };

  const keyup = ({ code, target }) => {
    const text = target.value;
    if (code === 'Enter') {
      getData(text);
    }
  };

  const clickBtn = text => {
    getData(text);
    navigate(`/question1/search?=keyword=${text}/list`);
  };

  const onChangeHandler = ({ target }) => {
    dispatch(setSearchTextData(target.value));
  };
  return (
    <div>
      <input type='text' onKeyUp={keyup} onChange={onChangeHandler} />
      <button onClick={() => clickBtn(searchText)}>검색</button>
    </div>
  );
};

export default SearchContainer;
