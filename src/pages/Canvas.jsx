import React, { useEffect, useRef, useState } from 'react';
import { getItems, setItems } from '../utils/localStorage';
import styled from 'styled-components';
import Modal from '../components/modal/Modal';

const Canvas = () => {
  const object = useRef();
  const isClick = useRef(false);
  const [boxes, setBoxes] = useState(getItems('boxes') || []);
  const [isShowModal, setIsShowModal] = useState(null);
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

      // text
      if (box.name) {
        ctx.fillStyle = 'black';
        ctx.font = '18px serif';
        ctx.fillText(box.name, box.startX + 5, box.startY + 20);
      }
    });
    setItems('boxes', boxes);
  }, [boxes]);

  const startPoint = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const box = {
      startY: offsetY,
      startX: offsetX,
      width: 0,
      height: 0,
    };
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

    if (
      boxes[len - 1].startX === offsetX ||
      boxes[len - 1].startY === offsetY
    ) {
      cancel();
      return;
    }

    const name = prompt('영역의 이름은 무엇인가요?');
    if (!name) {
      cancel();
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
    if (isClick.current) {
      const deleteBox = [...boxes];
      deleteBox.pop();
      setBoxes(deleteBox);
      isClick.current = false;
    }
  };

  const removeBox = index => {
    const deleteBox = boxes.filter((box, idx) => index !== idx);
    setBoxes(deleteBox);
  };

  return (
    <Wrap>
      <canvas
        id='canvas'
        ref={object}
        onMouseDown={startPoint}
        onMouseMove={movePoint}
        onMouseUp={endPoint}
        onMouseLeave={cancel}
        width='600'
        height='750'
      ></canvas>
      <List>
        <ul>
          {boxes.map((item, index) => {
            if (item.name) {
              return (
                <div key={index}>
                  <li onClick={() => setIsShowModal(index)}>{item.name}</li>
                  {index === isShowModal ? (
                    <Modal
                      index={index}
                      removeBox={removeBox}
                      setIsShowModal={setIsShowModal}
                    />
                  ) : null}
                </div>
              );
            }
          })}
        </ul>
      </List>
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
  li {
    margin: 10px 0;
    :hover {
      background-color: rgba(97, 97, 97, 0.082);
    }
  }
`;
const List = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 200px;
  background-color: #ffffff8f;
`;

export default Canvas;
