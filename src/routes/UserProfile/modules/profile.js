import firebase from "firebase";
// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------
export function updateProfile(profile) {
  return (dispatch, getState) => {
    const state = getState();
    return firebase.database().ref(`/user/${state.firebase.get("auth").uid}`).set(profile);
  };
}

export const actions = {
  updateProfile
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};

export default function persistCommentReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
