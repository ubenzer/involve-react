import React from "react";
import Avatar from "material-ui/Avatar";
import "./ChatMessage.scss";

class ChatMessage extends React.Component {
  static propTypes = {
    chatItem: React.PropTypes.object
  };

  render() {
    let {chatItem} = this.props;
    let {text, name} = chatItem;

    return (
      <div className='chat-message chat-message_other chat-box__chat-message'>
        <Avatar className='chat-message__avatar'>{ name[0] }</Avatar>
        <span className='chat-message__message'> {text}</span>
      </div>
    );
  };
}

export default ChatMessage;
