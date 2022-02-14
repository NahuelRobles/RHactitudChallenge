/** @format */

import { ACTION } from '~/constants';

const initialState = {
  isLoading: false,
  error: false,
  data: [],
};

export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION.SIGNIN.LOAD.REQUEST:
    return { ...state, isLoading: true, error: false };
  case ACTION.SIGNIN.LOAD.SUCCESS:
    return { isLoading: false, data: action.data, error: false };
  case ACTION.SIGNIN.LOAD.FAILURE:
    return { ...state, isLoading: false, error: true };
  default:
    return state;
  }
};
