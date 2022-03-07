import React from 'react';
import { getProducts } from '../../axios/axios';

let Items = getProducts();
console.log(Items);

const Results = () => {
  return <div></div>;
};

export default Results;
