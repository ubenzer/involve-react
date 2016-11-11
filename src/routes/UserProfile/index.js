export default (store) => ({
  path: "profile",
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const container = require("./containers/UserProfileContainer").default;

      /*  Return getComponent   */
      cb(null, container);

    /* Webpack named bundle   */
    }, "profile");
  }
});
