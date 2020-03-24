export function enrollmentRegisterRequest(student, plan, startDate) {
  return {
    type: '@enrollment/ADD_ENROLLMENT_REQUEST',
    payload: {
      student,
      plan,
      startDate,
    },
  };
}

export function enrollmentRegisterSuccess() {
  return {
    type: '@enrollment/ADD_ENROLLMENT_SUCCESS',
  };
}

export function enrollmentUpdateRequest(id, selectPlan, start_date) {
  return {
    type: '@enrollment/UPDATE_ENROLLMENT_REQUEST',
    payload: {
      id,
      selectPlan,
      start_date,
    },
  };
}

export function enrollmentUpdateSuccess() {
  return {
    type: '@enrollment/UPDATE_ENROLLMENT_SUCCESS',
  };
}

export function enrollmentFailure() {
  return {
    return: {
      type: '@enrollment/ENROLLMENT_FAILURE',
    },
  };
}
