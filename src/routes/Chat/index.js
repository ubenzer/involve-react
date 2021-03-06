import {injectReducer} from "../../store/reducers";
import {ensureAnonymousLogin} from "../../utils/auth";

export default (store) => ({
  path: "chat/:channel",
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require("./containers/SiteChatContainer").default;
      const reducer = require("./modules/sitechat").default;

      injectReducer(store, {key: "chat", reducer});

      cb(null, Counter);
    }, "chat");
  }
});
