import {
  SET_PRODUCTS_DATA,
  SET_REGIONS_DATA,
  SET_SEARCHTEXT_DATA,
} from '../action';

const initialState = {
  productsData: [],
  regionsData: {},
  isLoaded: false,
  searchText: '',
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_DATA:
      return {
        ...state,
        productsData: action.payload,
      };

    case SET_REGIONS_DATA:
      return {
        ...state,
        regionsData: action.payload,
      };
    case SET_SEARCHTEXT_DATA:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};
