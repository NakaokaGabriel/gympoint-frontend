import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { planRegisterSuccess, planFailure } from './actions';

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

export default all([takeLatest('@plan/ADD_PLAN_REQUEST', planRegister)]);
