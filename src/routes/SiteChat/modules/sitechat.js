import firebase from "firebase/firebase";

let database = firebase.database();
let test = database.ref("entry/byContentId/ubenzercom");
test.on("value", (snapshot) => {
  console.debug(snapshot.val());
  commentListUpdated(snapshot.val());
});
// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const COMMENTS_UPDATED = "COMMENTS_UPDATED";

// ------------------------------------
// Actions
// ------------------------------------
export function increment(value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  };
}

export function commentListUpdated(value = {}) {
  return (dispatch, getState) => {
    test.on("value", (snapshot) => {
      dispatch({
        type: COMMENTS_UPDATED,
        payload: snapshot.val()
      });
    });
  };
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().sitechat.number));
        resolve();
      }, 200);
    });
  };
};

export const actions = {
  increment,
  doubleAsync,
  commentListUpdated
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => { return {number: state.number + action.payload}; },
  [COMMENTS_UPDATED]: (state, action) => { return {comments: action.payload}; }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  number: 0,
  comments: {}
};
export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
