import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import {
  enrollmentRegisterSuccess,
  enrollmentFailure,
} from '~/store/modules/enrollment/actions';

export function* enrollmentRegister({ payload }) {
  try {
    const { student, plan, startDate } = payload;

    const [day, month, year] = startDate.split('/');
    const date = new Date(`${year}, ${month}, ${day}`);

    yield call(api.post, 'enrollments', {
      student_id: student,
      plan_id: plan,
      start_date: date,
    });

    yield put(enrollmentRegisterSuccess());
  } catch (err) {
    yield put(enrollmentFailure());
  }
}

export default all([
  takeLatest('@enrollment/ADD_ENROLLMENT_REQUEST', enrollmentRegister),
]);
