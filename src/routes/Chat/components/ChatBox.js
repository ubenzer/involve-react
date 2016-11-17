import React from "react";
import {helpers} from "redux-react-firebase";
const {isLoaded} = helpers;
import CircularProgress from "material-ui/CircularProgress";
import ChatMessage from "./ChatMessage";
import AddMessage from "./AddMessage";
import "./ChatBox.scss";
import LoginContainer from "../../../containers/LoginContainer";
import LoginDialog from "../../../components/LoginModal";
import {AutoSizer, CellMeasurer, List} from "react-virtualized";

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

  renderSingleChatMessage = ({style, chatMessages, index}) => (
    <div style={style} key={chatMessages[index]._key}>
      <ChatMessage chatItem={chatMessages[index]} />
    </div>
  )

  renderContent = ({chatMessages}) => (
    <div className='chat-box__content'>
      <div className='chat-box__chat-messages'>
        <AutoSizer>
          {({height, width}) => (
            <CellMeasurer
              cellRenderer={({rowIndex}) => this.renderSingleChatMessage({index: rowIndex, chatMessages})}
              columnCount={1}
              rowCount={chatMessages.length}
              width={width}
            >
              {({getRowHeight}) => (
                <List
                  rowCount={chatMessages.length}
                  height={height}
                  rowHeight={getRowHeight}
                  rowRenderer={({style, index}) => this.renderSingleChatMessage({style, index, chatMessages})}
                  width={width}
                />
              )}
            </CellMeasurer>
          )}
        </AutoSizer>
      </div>
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
        {isLoaded(chat) && this.renderContent({chatMessages: chat})}
      </div>
    );
  };
}

export default ChatBox;
