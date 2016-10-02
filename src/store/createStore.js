import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {browserHistory} from "react-router";
import makeRootReducer from "./reducers";
import {updateLocation} from "./location";
import {reduxReactFirebase, firebaseStateReducer} from "redux-react-firebase"

let config = {
  apiKey: "AIzaSyBx_5pNM2LnOVRLnnpwYyeLOGVT3OSekG4",
  authDomain: "involve-7242f.firebaseapp.com",
  databaseURL: "https://involve-7242f.firebaseio.com",
  storageBucket: "involve-7242f.appspot.com",
  messagingSenderId: "936140078216"
};

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  if (__DEV__) {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      reduxReactFirebase(config),
      ...enhancers,
    )
  );
  store.asyncReducers = {};

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store));

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const reducers = require("./reducers").default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
};
