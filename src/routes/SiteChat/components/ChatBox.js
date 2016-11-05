import React from "react";
import {helpers} from "redux-react-firebase";
const {isLoaded} = helpers;
import CircularProgress from "material-ui/CircularProgress";
import OtherChatItem from "./ChatMessage";
import AddMessage from "./AddMessage";
import "./ChatBox.scss";

class ChatBox extends React.Component {
  static propTypes = {
    form: React.PropTypes.object,
    chat: React.PropTypes.object,
    firebase: React.PropTypes.shape({
      push: React.PropTypes.func.isRequired
    }),
    persistComment: React.PropTypes.func.isRequired,
    params:  React.PropTypes.shape({
      channel: React.PropTypes.string.isRequired
    }).isRequired
  };

  handleNewMessage = (comment) => {
    this.props.persistComment(comment);
  };

  componentDidMount() {
    const id = this.props.params.channel;
    console.log(id);
  }

  render() {
    const {chat} = this.props;
    let output = <CircularProgress />;
    if (isLoaded(chat)) {
      output = Object.keys(chat || {}).map((key) => (
        <OtherChatItem key={key} chatItem={chat[key]} />
      ));
    }
    return (
      <div className="chat-box container__chat-box">
        {output}
        <AddMessage handleNewMessage={this.handleNewMessage} />
      </div>
    );
  };
}

export default ChatBox;
