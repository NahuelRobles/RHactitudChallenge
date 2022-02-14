/* eslint-disable require-yield */
/* eslint-disable no-undef */

/** @format */

import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import Config from 'react-native-config';

import { storeSync } from '~/utils';
import { ACTION, TOKEN } from '~/constants';

const getToken = async () => {
  const data = {
    sub : "ToolboxMobileTest"
  };
  return axios({
    url: `v1/mobile/auth`,
    method: 'post',
    baseURL: Config.BASE_URL,
    data: data
  });
};


function* load() {
  try {
    const { data } = yield call(getToken);
    storeSync(TOKEN, data?.token);
    yield put({ type: ACTION.SIGNIN.LOAD.SUCCESS, data });
  } catch (error) {
    console.log('Error', error);
    yield put({ type: ACTION.SIGNIN.LOAD.FAILURE, error });
  }
}

export function* signInSaga() {
  yield takeEvery(ACTION.SIGNIN.LOAD.REQUEST, load);
}
