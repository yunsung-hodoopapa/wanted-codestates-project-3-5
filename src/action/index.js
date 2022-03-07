// 액션 타입 지정
export const GET_DATA = 'GET_DATA';

export const getDataFromStore = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};
