import React, { useState, useEffect } from 'react';
import { getRegions } from '../../axios/axios';
import styled from 'styled-components';

const DetailView = () => {
  const [regionData, setRegionData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getRegionDataFromJson = async () => {
    const data = await getRegions().then(data => {
      setTimeout(() => {
        setRegionData(data[0]);
        setIsLoaded(true);
      }, 2000);
    });
  };
  // console.log(regionData);

  useEffect(() => {
    getRegionDataFromJson();
  }, []);

  return (
    <Wrap>
      {isLoaded ? (
        <Box>
          <ImgBox>
            <img src={regionData.image_url} />
          </ImgBox>
          <TextBox>
            <FlexBox>
              <SectionTitle>ITEM</SectionTitle>
              <ItemTag>
                <span>
                  {regionData.category_names[0].slice(3, -1).toUpperCase()}
                </span>
              </ItemTag>
            </FlexBox>
            <GrayLine />
            <SectionTitle>ATTRIBUTES</SectionTitle>
            <AttrBox>
              {regionData.attributes.map((item, idx) => {
                // console.log(item);
                for (let key in item) {
                  const value = item[key];
                  return (
                    <AttrItem key={idx}>
                      <span>#{value.toUpperCase()}</span>
                      <div>{key.toUpperCase()}</div>
                    </AttrItem>
                  );
                }
              })}
            </AttrBox>
          </TextBox>
        </Box>
      ) : (
        <div>불러오는중</div>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: 20px;
  width: 420px;
  min-height: 700px;
  border-radius: 6px;
  background-color: pink;
  overflow: hidden;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 480px;
  background-color: #eee;
  overflow: hidden;

  img {
    max-width: 100%;
    /* max-height: 100%; */
    object-fit: cover;
  }
`;

const TextBox = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const GrayLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
`;

const SectionTitle = styled.h3`
  color: #333;
  font-size: 22px;
`;

const ItemTag = styled.div`
  background-color: var(--main-color);
  display: inline-block;
  border-radius: 4px;
  color: #eee;
  padding: 7px 14px;
  margin-left: 34px;
`;

const AttrBox = styled.div`
  margin-top: 22px;
`;

const AttrItem = styled.div`
  margin: 0 20px 16px 0;
  display: inline-block;

  span {
    color: var(--main-color);
    font-weight: 600;
    font-size: 17px;
  }
  div {
    margin-top: 6px;
    font-size: 16px;
    color: #444;
  }
`;

export default DetailView;
