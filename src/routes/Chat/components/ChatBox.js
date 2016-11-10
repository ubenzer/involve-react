import React from "react";
import {helpers} from "redux-react-firebase";
const {isLoaded} = helpers;
import CircularProgress from "material-ui/CircularProgress";
import ChatMessage from "./ChatMessage";
import AddMessage from "./AddMessage";
import "./ChatBox.scss";

class ChatBox extends React.Component {
  static propTypes = {
    chat: React.PropTypes.array,
    persistComment: React.PropTypes.func.isRequired,
    params: React.PropTypes.shape({
      channel: React.PropTypes.string.isRequired
    }).isRequired,
    auth: React.PropTypes.shape({
      uid: React.PropTypes.string.isRequired,
      isAnonymous: React.PropTypes.bool.isRequired
    }).isRequired
  };

  handleNewMessage = (comment) => {
    this.props.persistComment(comment);
  };

  renderLoading = () => <div className='chat-box chat-box__loading'><CircularProgress /></div>

  renderChatMessages = (chat) => chat.map((chat) => (
    <ChatMessage key={chat._key} chatItem={chat}/>
  ))

  render() {
    const {auth, chat} = this.props;
    return (
      <div className='chat-box container__chat-box'>
        {!isLoaded(chat) && this.renderLoading()}
        {isLoaded(chat) && this.renderChatMessages(chat)}
        <AddMessage handleNewMessage={this.handleNewMessage} />
      </div>
    );
  };
}

export default ChatBox;
