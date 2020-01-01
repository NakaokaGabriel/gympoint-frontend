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

export function studentFailure() {
  return {
    type: '@student/FAILURE',
  };
}
