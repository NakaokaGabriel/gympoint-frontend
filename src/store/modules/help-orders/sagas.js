import { takeLatest, all, put, call } from 'redux-saga/effects';

import api from '~/services/api';
import { askHelpOrdersSuccess, helpOrdersFailure } from './actions';

export function* registerAskHelpOrders({ payload }) {
  try {
    const { id, answer } = payload;

    yield call(api.post, `help-orders/${id}/answer`, {
      answer,
    });

    yield put(askHelpOrdersSuccess());
  } catch (err) {
    yield put(helpOrdersFailure());
  }
}

export default all([
  takeLatest('@help-order/ADD_ANSWER_REQUEST', registerAskHelpOrders),
]);
