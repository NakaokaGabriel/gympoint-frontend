import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/REGISTER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/REGISTER_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@student/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/UPDATE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@student/FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
