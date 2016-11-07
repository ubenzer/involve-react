import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {persistComment} from "../modules/sitechat";
import {firebase, helpers} from "redux-react-firebase";
import {createSelector} from 'reselect'

const {pathToJS, dataToJS} = helpers;

import SiteChat from "../components/ChatBox";

const mapDispatchToProps = (dispatch, {params}) => (
  {
    persistComment: bindActionCreators(persistComment.bind(null, params.channel), dispatch)
  }
);

const chatMessagesSelector = ({firebase}, {params}) => (dataToJS(firebase, `/entry/byChannel/${params.channel}`, {}))
const orderedChatMessagesSelector = createSelector(
  chatMessagesSelector,
  (chatMessages) => Object.keys(chatMessages).sort().map((id) => ({"_key": id, ...chatMessages[id]}))
)

const mapStateToProps = (state, ownProps) => {
  return {
    chat: orderedChatMessagesSelector(state, ownProps),
    profile: pathToJS(state.firebase, "profile"),
    auth: pathToJS(state.firebase, "auth")
  };
};

const fbWrappedComponent = firebase(({params}) => [
    [`/entry/byChannel/${params.channel}#orderByKey&limitToLast=10`]
  ])(SiteChat);

export default connect(mapStateToProps, mapDispatchToProps)(fbWrappedComponent);
