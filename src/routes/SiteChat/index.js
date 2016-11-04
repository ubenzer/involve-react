import {injectReducer} from "../../store/reducers";

export default (store) => ({
  path: "chat",
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = require("./containers/SiteChatContainer").default;
      const reducer = require("./modules/sitechat").default;

      injectReducer(store, {key: "sitechat", reducer});

      /*  Return getComponent   */
      cb(null, Counter);

    /* Webpack named bundle   */
    }, "chat");
  }
});
