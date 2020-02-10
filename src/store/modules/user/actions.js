export function registerPlanRequest(title, duration, monthPrice, yearPrice) {
  return {
    type: '@user/REGISTER_PLAN_REQUEST',
    payload: {
      title,
      duration,
      monthPrice,
      yearPrice,
    },
  };
}

export function registerPlanSuccess(plan) {
  return {
    type: '@user/REGISTER_PLAN_SUCCESS',
    payload: {
      plan,
    },
  };
}

export function userPlanFailure() {
  return {
    type: '@user/PLAN_FAILURE',
  };
}
