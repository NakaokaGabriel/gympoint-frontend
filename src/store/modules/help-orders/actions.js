export function askHelpOrdersRequest(id, answer) {
  return {
    type: '@help-order/ADD_ANSWER_REQUEST',
    payload: {
      id,
      answer,
    },
  };
}

export function askHelpOrdersSuccess() {
  return {
    type: '@help-order/ADD_ANSWER_SUCCESS',
  };
}

export function helpOrdersFailure() {
  return {
    type: '@help-order/HELP-ORDER_FAILURE',
  };
}
