import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  enrollment: {
    id: null,
  },
};

export default function helpOrders(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@help-order/ADD_ANSWER_REQUEST': {
        draft.loading = true;
        draft.enrollment.id = action.payload.id;
        break;
      }
      case '@help-order/ADD_ANSWER_SUCCESS': {
        draft.loading = false;
        draft.enrollment.id = null;
        break;
      }
      case '@help-order/HELP-ORDER_FAILURE': {
        draft.loading = false;
        draft.enrollment.id = null;
        break;
      }
      default:
    }
  });
}
