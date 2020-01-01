export function studentRegisterRequest(data) {
  return {
    type: '@student/REGISTER_REQUEST',
    payload: {
      data,
    },
  };
}

export function studentRegisterSuccess() {
  return {
    type: '@student/REGISTER_REQUEST',
  };
}

export function studentUpdateRequest(data, studentId) {
  return {
    type: '@student/UPDATE_REQUEST',
    payload: {
      data,
      studentId,
    },
  };
}

export function studentUpdateSuccess(profile) {
  return {
    type: '@student/UPDATE_SUCCESS',
  };
}

export function studentFailure() {
  return {
    type: '@student/FAILURE',
  };
}
