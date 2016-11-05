import {injectReducer} from "../../store/reducers";

export default (store) => ({
  path: "chat/:channel",
  onEnter(nextState, replace, cb) {
    store.firebase.auth().signInAnonymously()
    .then(() => {
      cb();
    })
    .catch(console.error);
  },
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = require("./containers/SiteChatContainer").default;
      const reducer = require("./modules/sitechat").default;

      injectReducer(store, {key: "chat", reducer});

      /*  Return getComponent   */
      cb(null, Counter);

    /* Webpack named bundle   */
    }, "chat");
  }
});
