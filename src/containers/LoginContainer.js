import {connect} from "react-redux";
import {firebase, helpers} from "redux-react-firebase";

const {pathToJS} = helpers;

import LoginLinks from "../components/LoginLinks";

const mapDispatchToProps = {};

const mapStateToProps = (state) => {
  return {
    profile: pathToJS(state.firebase, "profile"),
    auth: pathToJS(state.firebase, "auth")
  };
};

const fbWrappedComponent = firebase()(LoginLinks);

export default connect(mapStateToProps, mapDispatchToProps)(fbWrappedComponent);
