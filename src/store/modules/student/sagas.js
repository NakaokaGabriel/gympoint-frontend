import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { studentFailure, studentRegisterSuccess } from './actions';

export function* register({ payload }) {
  try {
    const { data } = payload;

    const age = Number(data.age);
    const weight = parseFloat(data.weight);
    const height = parseFloat(data.height);

    yield call(api.post, 'students', {
      ...data,
      age,
      weight,
      height,
    });

    yield put(studentRegisterSuccess());
  } catch (err) {
    yield put(studentFailure());
  }
}

export default all([takeLatest('@student/REGISTER_REQUEST', register)]);
