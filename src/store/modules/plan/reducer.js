import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/DELETE_PLAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/DELETE_PLAN_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@plan/UPDATE_PLAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/UPDATE_PLAN_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@plan/PLAN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
