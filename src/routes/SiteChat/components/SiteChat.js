import React from "react";
import {helpers} from "redux-react-firebase";
const {isLoaded} = helpers;
import CircularProgress from "material-ui/CircularProgress";
import OtherChatItem from "./OtherChatItem";
import AddMessage from "./AddMessage";

class SiteChat extends React.Component {
  static propTypes = {
    form: React.PropTypes.object,
    chat: React.PropTypes.object,
    firebase: React.PropTypes.shape({
      push: React.PropTypes.func.isRequired
    }),
    persistComment: React.PropTypes.func.isRequired
  };

  handleNewMessage = () => {
    this.props.persistComment();
  };

  render() {
    const {firebase, chat} = this.props;
    console.log(this.props);
    let output = <CircularProgress />;
    if (isLoaded(chat)) {
      output = Object.keys(chat || {}).map((key) => (
        <OtherChatItem key={key} chatItem={chat[key]} />
      ));
    }
    return (
      <div style={{margin: "0 auto"}} >
        {output}
        <AddMessage handleNewMessage={() => this.handleNewMessage()} />
      </div>
    );
  };
}

export default SiteChat;
