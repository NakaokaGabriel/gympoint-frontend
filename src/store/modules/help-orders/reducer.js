import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function helpOrders(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@help-order/ADD_ANSWER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@help-order/ADD_ANSWER_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@help-order/HELP-ORDER_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
