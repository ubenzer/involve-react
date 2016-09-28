import React from "react";

class SiteChat extends React.Component {

  componentWillMount() {
    this.props.commentListUpdated();
  };

  render() {
    return (
      <div style={{margin: "0 auto"}} >
        { Object.keys(this.props.comments).length }
      </div>
    );
  };
}

SiteChat.propTypes = {
  comments: React.PropTypes.object.isRequired,
  commentListUpdated: React.PropTypes.func.isRequired
};

export default SiteChat;
