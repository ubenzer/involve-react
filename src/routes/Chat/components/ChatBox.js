import React from "react";
import {helpers} from "redux-react-firebase";
const {isLoaded} = helpers;
import CircularProgress from "material-ui/CircularProgress";
import ChatMessage from "./ChatMessage";
import AddMessage from "./AddMessage";
import "./ChatBox.scss";
import LoginContainer from "../../../containers/LoginContainer";
import LoginDialog from "../../../components/LoginModal";

class ChatBox extends React.Component {
  static propTypes = {
    chat: React.PropTypes.array,
    persistComment: React.PropTypes.func.isRequired,
    params: React.PropTypes.shape({
      channel: React.PropTypes.string.isRequired
    }).isRequired,
    auth: React.PropTypes.shape({
      uid: React.PropTypes.string.isRequired
    })
  };

  state = {
    loginDialogOpen: false
  };

  openDialog = () => {
    this.setState({loginDialogOpen: true});
  }

  closeDialog = () => {
    this.setState({loginDialogOpen: false});
  }

  handleNewMessage = (comment) => {
    const {auth} = this.props;
    if (auth) {
      this.props.persistComment(comment);
    } else {
      this.openDialog();
    }
  };

  renderLoading = () => <div className='chat-box chat-box__loading'><CircularProgress /></div>

  renderChatMessages = (chat) => chat.map((chat) => (
    <ChatMessage key={chat._key} chatItem={chat} />
  ))

  renderContent = () => (
    <div>
      { this.renderChatMessages(this.props.chat) }
      { !this.props.auth && <LoginContainer /> }
      { !this.props.auth && <LoginDialog open={this.state.loginDialogOpen} handleClose={this.closeDialog} /> }
      <AddMessage handleNewMessage={this.handleNewMessage} />
    </div>
  )
  render() {
    const {chat} = this.props;
    return (
      <div className='chat-box container__chat-box'>
        {!isLoaded(chat) && this.renderLoading()}
        {isLoaded(chat) && this.renderContent()}
      </div>
    );
  };
}

export default ChatBox;
