import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Canvas = () => {
  const object = useRef();
  const isClick = useRef(false);
  const [boxes, setBoxes] = useState([]);
  const len = boxes.length;

  useEffect(() => {
    const canvas = object.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    boxes.forEach(box => {
      ctx.strokeRect(box.startX, box.startY, box.width, box.height);
    });
  }, [boxes]);

  const startPoint = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const box = { startY: offsetY, startX: offsetX, width: 0, height: 0 };
    isClick.current = true;
    setBoxes([...boxes, box]);
  };

  const movePoint = ({ nativeEvent }) => {
    if (isClick.current) {
      const { offsetX, offsetY } = nativeEvent;
      setPoint(offsetX, offsetY);
    }
  };

  const endPoint = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setPoint(offsetX, offsetY);
    isClick.current = false;
  };

  const setPoint = (offsetX, offsetY) => {
    const width = offsetX - boxes[len - 1].startX;
    const height = offsetY - boxes[len - 1].startY;

    boxes[len - 1].width = width;
    boxes[len - 1].height = height;
    setBoxes([...boxes]);
  };

  return (
    <Wrap>
      <canvas
        id="canvas"
        ref={object}
        onMouseDown={startPoint}
        onMouseMove={movePoint}
        onMouseUp={endPoint}
        width="600"
        height="750"
      ></canvas>
    </Wrap>
  );
};

const Wrap = styled.div`
  #canvas {
    background-image: url('img/fashion-unsplash.jpg');
    background-size: cover;
  }
`;

export default Canvas;
