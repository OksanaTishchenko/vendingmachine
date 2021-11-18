const ADD_CASH = "ADD_CASH";
const CLEAR_CASH = "CLEAR_CASH";

const initialState = {
  cash: 0
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CASH:
      return {
        cash: state.cash + action.payload
      }

    case CLEAR_CASH:
      return {
        cash: 0
      }

    default:
      return state
  }
}

export const add_cash = (number) => ({ type: ADD_CASH, payload: number });
export const clear_cash = () => ({ type: CLEAR_CASH });
