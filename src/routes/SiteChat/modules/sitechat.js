import firebase from "firebase";
// ------------------------------------
// Constants
// ------------------------------------
export const PERSIST_COMMENT = "PERSIST_COMMENT";

// ------------------------------------
// Actions
// ------------------------------------
export function persistComment() {
  return (dispatch, getState) => {
    let state = getState();
    firebase.database().ref("/entry/byContentId/ubenzercom").push({name: "A", text: state.form.AddMessage.values.firstName});
    state.form.AddMessage.values.firstName
    dispatch({
      type: PERSIST_COMMENT,
      payload: ""
    });
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
