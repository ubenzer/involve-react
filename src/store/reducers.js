import {combineReducers} from "redux";
import locationReducer from "./location";
import {firebaseStateReducer} from "redux-react-firebase";
import {reducer as formReducer} from "redux-form";

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    firebase: firebaseStateReducer,
    form: formReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, {key, reducer}) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
