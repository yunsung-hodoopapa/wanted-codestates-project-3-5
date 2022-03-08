import { SET_PRODUCTS_DATA, SET_REGIONS_DATA } from '../action';

const initialState = {
  productsData: [],
  regionsData: {},
};

// 리듀서 함수는 parameter를 2개 받는다
// state랑 action객체
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_PRODUCTS_DATA:
    //   return {};
    case SET_PRODUCTS_DATA:
      return {
        ...state,
        productsData: action.payload,
      };
    // case GET_REGIONS_DATA:
    //   return {};
    case SET_REGIONS_DATA:
      console.log(action.payload);
      return {
        ...state,
        regionsData: action.payload,
      };
    default:
      return state;
  }
};
