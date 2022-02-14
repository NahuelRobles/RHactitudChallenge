/* eslint-disable require-yield */
/* eslint-disable no-undef */

/** @format */

import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import Config from 'react-native-config';

import { getSync } from '~/utils';
import { ACTION, TOKEN } from '~/constants';

const getVideo = async (token) => {
  return axios({
    url: `v1/mobile/data`,
    method: 'get',
    baseURL: Config.BASE_URL,
    headers: {
      authorization: `Bearer ${token}`
    }
  });
};


function* load() {
  try {
    const token = getSync(TOKEN);
    const { data } = yield call(getVideo, token);
    yield put({ type: ACTION.VIDEO.LOAD.SUCCESS, data });
  } catch (error) {
    console.log('Error', error);
    yield put({ type: ACTION.VIDEO.LOAD.FAILURE, error });
  }
}

export function* videoSaga() {
  yield takeEvery(ACTION.VIDEO.LOAD.REQUEST, load);
}
