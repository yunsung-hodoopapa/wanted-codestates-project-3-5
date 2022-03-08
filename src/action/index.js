// 액션 타입 지정
// export const GET_PRODUCTS_DATA = 'GET_PRODUCTS_DATA';
export const SET_PRODUCTS_DATA = 'SET_PRODUCTS_DATA';
// export const GET_REGIONS_DATA = 'GET_REGIONS_DATA';
export const SET_REGIONS_DATA = 'SET_REGIONS_DATA';
import { getProducts, getRegions } from '../axios/axios';

// export const getProductsData = data => {
//   return {
//     type: GET_PRODUCTS_DATA,
//     payload: data,
//   };
// };

export const setProductsData = data => {
  return {
    type: SET_PRODUCTS_DATA,
    payload: data,
  };
};

// export const getRegionsData = data => {
//   return {
//     type: GET_REGIONS_DATA,
//     payload: data,
//   };
// };
export const setRegionsData = data => {
  return {
    type: SET_REGIONS_DATA,
    payload: data,
  };
};
