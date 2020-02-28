import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { planRegisterSuccess, planDeleteSuccess, planFailure } from './actions';

export function* planRegister({ payload }) {
  try {
    const { title, duration, monthPrice } = payload;

    const formatDuration = Number(duration);
    const formatPrice = parseFloat(monthPrice);

    yield call(api.post, 'plans', {
      title,
      duration: formatDuration,
      price: formatPrice,
    });

    yield put(planRegisterSuccess());
  } catch (err) {
    yield put(planFailure());
  }
}

export function* planDelete({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `plans/${id}`);

    yield put(planDeleteSuccess());
  } catch (err) {
    yield put(planFailure());
  }
}

export default all([
  takeLatest('@plan/DELETE_PLAN_REQUEST', planDelete),
  takeLatest('@plan/ADD_PLAN_REQUEST', planRegister),
]);
