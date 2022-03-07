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
    boxes.forEach((box, index) => {
      ctx.strokeStyle = 'black';
      ctx.strokeStyle = 'rgb(124,213,246)';
      ctx.fillStyle = '#48aa3732';
      if (index === boxes.length - 1 && isClick.current) {
        ctx.strokeStyle = '#f34d98';
        ctx.fillStyle = 'rgba(248,156,197,0.2)';
      }
      ctx.fillRect(box.startX, box.startY, box.width, box.height);
      ctx.strokeRect(box.startX, box.startY, box.width, box.height);

      ctx.fillStyle = 'black';
      ctx.font = '18px serif';
      ctx.fillText(box.name, box.startX + 5, box.startY + 20);
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
    const name = prompt('영역의 이름은 무엇인가요?');
    if (name === null) {
      cancel();
      isClick.current = false;
      return;
    }
    setPoint(offsetX, offsetY, name);
    isClick.current = false;
  };

  const setPoint = (offsetX, offsetY, name = '') => {
    const width = offsetX - boxes[len - 1].startX;
    const height = offsetY - boxes[len - 1].startY;

    boxes[len - 1].width = width;
    boxes[len - 1].height = height;
    boxes[len - 1].name = name;
    setBoxes([...boxes]);
  };

  const cancel = () => {
    const deleteBox = [...boxes];
    deleteBox.pop();
    setBoxes(deleteBox.pop());
    console.log(boxes);
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
      <div>
        <ul>
          {boxes.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  #canvas {
    background-image: url('img/fashion-unsplash.jpg');
    background-size: cover;
    width: 600px;
    height: 750px;
  }
  div {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 200px;
    background-color: #ffffff8f;
  }
`;

export default Canvas;
