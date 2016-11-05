import {ensureAnonymousLogin} from "../../utils/auth";

export default (store) => ({
  path: "profile",
  onEnter(nextState, replace, cb) {
    ensureAnonymousLogin(store, cb, console.error);
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const container = require("./containers/UserProfileContainer").default;

      /*  Return getComponent   */
      cb(null, container);

    /* Webpack named bundle   */
    }, "chat");
  }
});
