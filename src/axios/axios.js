import axios from 'axios';

const getProducts = async () => {
  const res = await axios.get(
    'https://static.pxl.ai/problem/data/products.json',
  );
  const data = res.data;
  return data;
};

const getRegions = async () => {
  const res = await axios.get(
    'https://static.pxl.ai/problem/data/regions.json',
  );
  return res.data;
};

export { getProducts, getRegions };
