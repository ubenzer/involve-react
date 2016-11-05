import { bindActionCreators } from 'redux';
import {connect} from "react-redux";
import {persistComment} from "../modules/sitechat";
import {firebase, helpers} from "redux-react-firebase";
const {pathToJS, dataToJS} = helpers;

import SiteChat from "../components/ChatBox";

const mapDispatchToProps = (dispatch, {params}) => (
  {
    persistComment: bindActionCreators(persistComment.bind(null, params.channel), dispatch)
  }
);

const mapStateToProps = ({firebase}, {params}) => {
  return {
    chat: dataToJS(firebase, `/entry/byChannel/${params.channel}`),
    profile: pathToJS(firebase, "profile"),
    auth: pathToJS(firebase, "auth")
  };
};

const fbWrappedComponent = firebase(({params}) => [`/entry/byChannel/${params.channel}`])(SiteChat);

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(fbWrappedComponent);
