import {connect} from "react-redux";
import {actions} from "../modules/profile";
import {firebase, helpers} from "redux-react-firebase";
const {pathToJS, dataToJS} = helpers;

import UserProfile from "../components/UserProfile";

const mapDispatchToProps = {...actions};

const mapStateToProps = ({firebase}) => {
  const profile = pathToJS(firebase, "profile");
  return {
    initialValues: profile,
    auth: pathToJS(firebase, "auth")
  };
};

//const fbWrappedComponent = firebase(({params}) => [`/entry/byChannel/${params.channel}`])(SiteChat);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
