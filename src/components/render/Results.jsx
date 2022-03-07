import React, { useEffect } from 'react';
import { getProducts } from '../../axios/axios';

const Results = () => {
  let Items = [];

  const addData = async () => {
    const data = await getProducts();
    // console.log(data);

    return data;
  };

  console.log(getProducts());
  console.log(addData());
  useEffect(() => addData(), []);

  return <div></div>;
};

export default Results;
