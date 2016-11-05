import firebase from "firebase";
// ------------------------------------
// Constants
// ------------------------------------
export const PERSIST_COMMENT = "PERSIST_COMMENT";

// ------------------------------------
// Actions
// ------------------------------------
export function persistComment(channel, comment) {
  return (dispatch, getState) => {
    return firebase.database().ref(`/entry/byChannel/${channel}`).push({name: "A", text: comment.message});
  };
}

export const actions = {
  persistComment
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [PERSIST_COMMENT]: (state, action) => {
    return state;
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  comments: {}
};

export default function persistCommentReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
