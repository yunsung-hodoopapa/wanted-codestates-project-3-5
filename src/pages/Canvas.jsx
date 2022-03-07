import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Canvas = () => {
  const object = useRef();
  const isClick = useRef(false);
  const [box, setBox] = useState([{}]);

  console.log(box);

  useEffect(() => {
    const canvas = object.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    box.forEach(item => {
      ctx.strokeRect(item.startLeft, item.startTop, item.width, item.height);
    });
  }, [box]);

  const startPoint = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    isClick.current = true;
    setBox([
      ...box,
      { startTop: offsetY, startLeft: offsetX, width: 0, height: 0 },
    ]);
  };

  const move = ({ nativeEvent }) => {
    if (isClick.current === true) {
      const { offsetX, offsetY } = nativeEvent;
      const width = offsetX - box[box.length - 1].startLeft;
      const height = offsetY - box[box.length - 1].startTop;

      box[box.length - 1].width = width;
      box[box.length - 1].height = height;

      setBox([...box]);
    }
  };

  const endPoint = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const width = offsetX - box[box.length - 1].startLeft;
    const height = offsetY - box[box.length - 1].startTop;

    box[box.length - 1].width = width;
    box[box.length - 1].height = height;
    setBox([...box]);

    isClick.current = false;
  };

  return (
    <Wrap>
      <canvas
        onMouseDown={startPoint}
        onMouseMove={move}
        onMouseUp={endPoint}
        ref={object}
        className="canvas"
        width="600"
        height="600"
      ></canvas>
    </Wrap>
  );
};

const Wrap = styled.div``;

export default Canvas;
