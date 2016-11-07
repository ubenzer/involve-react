import {injectReducer} from "../../store/reducers";
import {ensureAnonymousLogin} from "../../utils/auth";

export default (store) => ({
  path: "chat/:channel",
  onEnter(nextState, replace, cb) {
    ensureAnonymousLogin(store, cb, console.error);
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require("./containers/SiteChatContainer").default;
      const reducer = require("./modules/sitechat").default;

      injectReducer(store, {key: "chat", reducer});

      cb(null, Counter);
    }, "chat");
  }
});
