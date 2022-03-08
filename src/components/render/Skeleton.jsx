import React from 'react';
import styled, { keyframes } from 'styled-components';

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const CardSkeleton = styled.div`
  width: 203px;
  height: 710px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid #f5f5f5;
`;

const ProductSectionOfSkeleton = styled.div`
  display: inline-block;
  height: ${props => props.height || '23px'};
  width: ${props => props.width || '100px'};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 18px;
  margin-top: ${props => props.marginTop || '0'};
  padding: 8px 8px;
`;

const PictureSkeleton = styled(ProductSectionOfSkeleton)`
  margin-bottom: 16px;
  width: 205px;
  height: 310px;
  margin: auto;
  max-height: 310px;
  max-width: 205px;
  display: block;
`;

const Skeleton = () => {
  return (
    <Wrap>
      {new Array(10).fill('').map((_, i) => (
        <CardSkeleton key={i}>
          <PictureSkeleton />
          <ProductSectionOfSkeleton width="186px">
            &zwnj;
          </ProductSectionOfSkeleton>
          <ProductSectionOfSkeleton width="100px" marginTop="8px" />
        </CardSkeleton>
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 1080px;
  margin: 20px auto;
  height: 700px;
  border: 1px solid blue;
`;

export default Skeleton;
