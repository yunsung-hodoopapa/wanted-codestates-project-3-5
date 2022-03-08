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
  width: 150px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  margin: 5px 10px;
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
  width: 160px;
  height: 300px;
  display: block;
`;

const Skeleton = () => {
  return (
    <>
      {new Array(15).fill('').map((_, i) => (
        <CardSkeleton key={i}>
          <PictureSkeleton />
          <ProductSectionOfSkeleton width='140px' />
          <ProductSectionOfSkeleton width='100px' marginTop='8px' />
        </CardSkeleton>
      ))}
    </>
  );
};


export default Skeleton;
