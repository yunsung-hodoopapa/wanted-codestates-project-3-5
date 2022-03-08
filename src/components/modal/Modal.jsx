import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Modal = ({ name, index, removeBox, updateBox, setIsShowModal }) => {
  const [inputName, setInputName] = useState(name);

  const inputHandler = e => {
    setInputName(e.target.value);
  };

  const updateHandler = () => {
    updateBox(inputName, index);
    setIsShowModal(null);
  };

  const removeHandler = () => {
    removeBox(index);
    setIsShowModal(null);
  };

  return (
    <>
      <Bg onClick={() => setIsShowModal(null)}></Bg>
      <Box>
        <h3>수정하기</h3>
        <i onClick={() => setIsShowModal(null)}></i>
        <div>
          <label htmlFor='title'>수정</label>
          <input
            id='title'
            type='text'
            value={inputName}
            onChange={inputHandler}
          />
        </div>
        <BtnBox>
          <button onClick={updateHandler}>저장</button>
          <button onClick={removeHandler}>삭제</button>
        </BtnBox>
      </Box>
    </>
  );
};

const Bg = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.5);
  overflow: hidden;
  z-index: 1;
`;

const Box = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 360px;
  padding: 20px;
  border-radius: 8px;
  margin: auto;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-sizing: border-box;
  z-index: 10;
  h3 {
    margin-bottom: 30px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 15px;
  }
  p {
    padding-left: 10px;
    font-weight: bold;
    word-wrap: break-word;
  }
  input {
    height: 36px;
    width: 100%;
    height: 40px;
    padding: 10px;
    margin-bottom: 40px;
    border-radius: 6px;
    box-sizing: border-box;
    resize: none;
  }
  i {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 10px;
    top: 10px;
    cursor: pointer;
    ::before,
    ::after {
      position: absolute;
      width: 2px;
      height: 25px;
      top: 5px;
      background-color: black;
      content: '';
    }
    ::before {
      right: 15px;
      transform: rotate(45deg);
    }
    ::after {
      right: 15px;
      transform: rotate(-45deg);
    }
  }
`;

const BtnBox = styled.div`
  display: flex;
  button {
    width: 50%;
    height: 40px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #3fc176;
    cursor: pointer;
    :last-child {
      margin-left: 10px;
      background-color: #e74c3c;
    }
  }
`;

Modal.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  removeBox: PropTypes.func,
  updateBox: PropTypes.func,
  setIsShowModal: PropTypes.func,
};

export default Modal;
