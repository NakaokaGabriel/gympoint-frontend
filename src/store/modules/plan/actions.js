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

export function planUpdateRequest(id, title, duration, price) {
  return {
    type: '@plan/UPDATE_PLAN_REQUEST',
    payload: {
      id,
      title,
      duration,
      price,
    },
  };
}

export function planUpdateSuccess() {
  return {
    type: '@plan/UPDATE_PLAN_SUCCESS',
  };
}

export function planFailure() {
  return {
    type: '@plan/PLAN_FAILURE',
  };
}
