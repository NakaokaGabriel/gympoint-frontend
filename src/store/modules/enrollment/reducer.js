import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function enrollment(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enrollment/ADD_ENROLLMENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@enrollment/ADD_ENROLLMENT_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@enrollment/UPDATE_ENROLLMENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@enrollment/UPDATE_ENROLLMENT_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@enrollment/ENROLLMENT_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
