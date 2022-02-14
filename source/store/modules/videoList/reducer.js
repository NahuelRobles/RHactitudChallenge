/** @format */

import { ACTION } from '~/constants';

const initialState = {
  isLoading: false,
  error: false,
  data: [],
};

export const videoListReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION.VIDEO.LOAD.REQUEST:
    return { ...state, isLoading: true, error: false };
  case ACTION.VIDEO.LOAD.SUCCESS:
    return { isLoading: false, data: action.data, error: false };
  case ACTION.VIDEO.LOAD.FAILURE:
    return { ...state, isLoading: false, error: true };
  default:
    return state;
  }
};
