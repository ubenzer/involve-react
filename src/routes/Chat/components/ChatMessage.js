import React from "react";
import Avatar from "material-ui/Avatar";
import "./ChatMessage.scss";

class ChatMessage extends React.Component {
  static propTypes = {
    chatItem: React.PropTypes.shape({
      name: React.PropTypes.string,
      photo: React.PropTypes.string,
      text: React.PropTypes.string
    }).isRequired
  };

  render() {
    let {chatItem} = this.props;
    let {photo, text, name} = chatItem;

    return (
      <div className='chat-message chat-message_other chat-box__chat-message'>
        <Avatar src={photo} className='chat-message__avatar' />
        <span className='chat-message__message'> {text}</span>
      </div>
    );
  };
}

export default ChatMessage;
