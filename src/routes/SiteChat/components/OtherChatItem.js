import React from "react";
import Avatar from "material-ui/Avatar";

class OtherChatItem extends React.Component {
  static propTypes = {
    chatItem: React.PropTypes.object
  };

  render() {
    let {chatItem} = this.props;
    let {text, name} = chatItem;

    return (
      <div>
        <Avatar>{ name[0] }</Avatar>
        {text}
      </div>
    );
  };
}

export default OtherChatItem;
