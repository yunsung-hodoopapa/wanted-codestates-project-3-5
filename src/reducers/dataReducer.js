import { GET_DATA } from '../action';

const initialState = {
  data: [],
};

// 리듀서 함수는 parameter를 2개 받는다
// state랑 action객체
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      // 불변성 때문에 복사해서 데이터 넣어주기
      return {
        ...state,
        data: action.payload,
      };
  }
};
