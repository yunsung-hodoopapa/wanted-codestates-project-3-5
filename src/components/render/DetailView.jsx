import React, { useState, useEffect } from 'react';
import { getRegions } from '../../axios/axios';
import styled from 'styled-components';

const DetailView = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const getRegionDataFromJson = async () => {
    const data = await getRegions().then(data => {
      setTimeout(() => {
        setData(data);
        setIsLoaded(true);
        console.log(data);
      }, 2000);
    });
  };

  useEffect(() => {
    getRegionDataFromJson();
  }, []);

  return <Wrap>{isLoaded ? <div>ㅇㅅㅇ ok</div> : <div>ㄴㄴ</div>}</Wrap>;
};

const Wrap = styled.div`
  width: 420px;
  height: 700px;
  background-color: pink;
  z-index: 3;
`;

export default DetailView;
