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

export function enrollmentFailure() {
  return {
    return: {
      type: '@enrollment/ENROLLMENT_FAILURE',
    },
  };
}
