import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import theme from '../../styles/theme';

const DetailView = () => {
  const { regionsData } = useSelector(state => ({
    regionsData: state.data.regionsData,
  }));
  const { attributes, category_names, image_url } = regionsData;

  console.log(regionsData);
  console.log(category_names);

  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        {!!regionsData && (
          <Box>
            <ImgBox>
              <img src={image_url} />
            </ImgBox>
            <TextBox>
              <FlexBox>
                <SectionTitle>ITEM</SectionTitle>
                <ItemTag>
                  <span>{category_names[0]}</span>
                </ItemTag>
              </FlexBox>
              <GrayLine />
              <SectionTitle>ATTRIBUTES</SectionTitle>
              <AttrBox>
                {attributes?.map((item, idx) => {
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
        )}
      </Wrap>
    </ThemeProvider>
  );
};

const Wrap = styled.div`
  margin: 20px;
  width: 370px;
  min-height: 400px;
  border-radius: 6px;
  background-color: pink;
  overflow: hidden;
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
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
    object-fit: cover;
    @media ${({ theme }) => theme.device.tablet} {
     display: block; margin: 0px auto;
    }
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
