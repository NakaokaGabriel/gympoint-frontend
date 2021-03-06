import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import student from './student/sagas';
import plan from './plan/sagas';
import enrollment from './enrollment/sagas';
import helpOrders from './help-orders/sagas';

export default function* rootSaga() {
  return yield all([auth, student, plan, enrollment, helpOrders]);
}
