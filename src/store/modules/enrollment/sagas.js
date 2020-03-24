import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';
import {
  enrollmentRegisterSuccess,
  enrollmentUpdateSuccess,
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

    history.push('/enrollments');
  } catch (err) {
    yield put(enrollmentFailure());
  }
}

export function* enrollmentUpdate({ payload }) {
  try {
    const { id, plan, start_date } = payload;

    const [day, month, year] = start_date.split('/');
    const date = new Date(`${year}, ${month}, ${day}`);

    yield call(api.put, `enrollments/${id}`, {
      start_date: date,
      plan_id: plan,
    });

    yield put(enrollmentUpdateSuccess());

    history.push('/enrollments');
  } catch (err) {
    yield put(enrollmentFailure());
  }
}

export default all([
  takeLatest('@enrollment/ADD_ENROLLMENT_REQUEST', enrollmentRegister),
  takeLatest('@enrollment/UPDATE_ENROLLMENT_REQUEST', enrollmentUpdate),
]);
