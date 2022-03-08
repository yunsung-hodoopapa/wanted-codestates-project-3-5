import { SET_PRODUCTS_DATA, SET_REGIONS_DATA } from '../action';

const initialState = {
  productsData: [],
  regionsData: {},
  isLoaded: false,
};

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
