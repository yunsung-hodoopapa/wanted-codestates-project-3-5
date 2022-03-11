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
        ctx.font = 'bold 18px Roboto';
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
    const deleteBox = boxes.filter((_, idx) => index !== idx);
    setBoxes(deleteBox);
  };

  const updateBox = (name, index) => {
    const newBoxes = boxes.map((item, idx) => {
      if (idx === index) {
        item.name = name;
      }
      return item;
    });
    setBoxes(newBoxes);
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
        <div>
          <h2>선택 영역 리스트</h2>
          <ul>
            {boxes.map((item, index) => {
              if (item.name) {
                return (
                  <li key={index}>
                    <p onClick={() => setIsShowModal(index)}>
                      {index + 1}. {item.name}
                    </p>
                    {index === isShowModal ? (
                      <Modal
                        name={item.name}
                        index={index}
                        removeBox={removeBox}
                        updateBox={updateBox}
                        setIsShowModal={setIsShowModal}
                      />
                    ) : null}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </List>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;

  #canvas {
    background-image: url('img/fashion-unsplash.jpg');
    background-size: cover;
  }
`;

const List = styled.div`
  min-width: 200px;
  margin: 10px 20px;

  > div {
    color: #141214;
    background-color: #eff3f8;
    font: 18px 'Noto Sans', 'Noto Sans KR', sans-serif;
  }

  h2 {
    font-weight: 600;
    padding-top: 10px;
    text-align: center;
  }

  ul {
    padding: 10px 20px;
    list-style: none;
  }

  p {
    cursor: pointer;
    padding: 5px;

    :hover {
      color: #eff3f8;
      background-color: #1349c3;
    }
  }
`;

export default Canvas;
