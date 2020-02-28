export function planRegisterRequest(title, duration, monthPrice) {
  return {
    type: '@plan/ADD_PLAN_REQUEST',
    payload: {
      title,
      duration,
      monthPrice,
    },
  };
}

export function planRegisterSuccess() {
  return {
    type: '@plan/ADD_PLAN_SUCCESS',
  };
}

export function planDeleteRequest(id) {
  return {
    type: '@plan/DELETE_PLAN_REQUEST',
    payload: {
      id,
    },
  };
}

export function planDeleteSuccess() {
  return {
    type: '@plan/DELETE_PLAN_SUCCESS',
  };
}

export function planFailure() {
  return {
    type: '@plan/PLAN_FAILURE',
  };
}
