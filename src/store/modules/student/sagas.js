import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import {
  studentRegisterSuccess,
  studentUpdateSuccess,
  studentFailure,
} from './actions';

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

    history.push('/students');
  } catch (err) {
    yield put(studentFailure());
  }
}

export function* update({ payload }) {
  try {
    const { data, studentId } = payload;

    const age = Number(data.age);
    const weight = parseFloat(data.weight);
    const height = parseFloat(data.height);

    yield call(api.put, `students/${studentId}`, {
      ...data,
      age,
      weight,
      height,
    });

    yield put(studentUpdateSuccess());

    history.push('/students');
  } catch (err) {
    yield put(studentFailure());
  }
}

export default all([
  takeLatest('@student/REGISTER_REQUEST', register),
  takeLatest('@student/UPDATE_REQUEST', update),
]);
