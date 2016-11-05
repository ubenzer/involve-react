import CoreLayout from "../layouts/CoreLayout/CoreLayout";
import Chat from "./Chat";
import UserProfile from "./UserProfile";

export const createRoutes = (store) => ({
  path: "/",
  onEnter: (nextState, replace) => {
    if (nextState.location.pathname === "/") {
      replace('/chat/self');
    }
  },
  component: CoreLayout,
  childRoutes: [
    Chat(store),
    UserProfile(store)
  ]
});

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
