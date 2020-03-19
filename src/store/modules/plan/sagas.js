import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import {
  planRegisterSuccess,
  planDeleteSuccess,
  planUpdateSuccess,
  planFailure,
} from './actions';

export function* planRegister({ payload }) {
  try {
    const { title, duration, monthPrice } = payload;

    const formatDuration = Number(duration);
    const formatPrice = monthPrice.replace('R$ ', '');
    parseFloat(formatPrice);

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

export function* planUpdate({ payload }) {
  try {
    const { id, title, duration, price } = payload;

    const [, endPrice] = price.split('R$ ');

    yield call(api.put, `plans/${id}`, {
      title,
      duration: Number(duration),
      price: parseFloat(endPrice),
    });

    yield put(planUpdateSuccess());
  } catch (err) {
    yield put(planFailure());
  }
}

export default all([
  takeLatest('@plan/DELETE_PLAN_REQUEST', planDelete),
  takeLatest('@plan/ADD_PLAN_REQUEST', planRegister),
  takeLatest('@plan/UPDATE_PLAN_REQUEST', planUpdate),
]);
