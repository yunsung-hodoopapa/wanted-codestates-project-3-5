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
  width: 200px;
  height: 400px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-sizing: border-box;
`;

const ProductSection = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ProductSectionOfSkeleton = styled.div`
  height: ${props => props.height || '20px'};
  width: ${props => props.width || '100px'};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
`;

const PictureSkeleton = styled(ProductSectionOfSkeleton)`
  width: 200px;
  height: 310px;
`;

const Skeleton = () => {
  return (
    <>
      {new Array(15).fill('').map((_, i) => (
        <CardSkeleton key={i}>
          <PictureSkeleton />
          <ProductSection>
            <ProductSectionOfSkeleton width='140px' />
            <ProductSectionOfSkeleton width='100px' />
          </ProductSection>
        </CardSkeleton>
      ))}
    </>
  );
};

export default Skeleton;
