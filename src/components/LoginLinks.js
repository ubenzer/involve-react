import React from "react";
import FlatButton from "material-ui/FlatButton";
import "./LoginLinks.scss";
import firebase from "firebase";

export default class LoginLinks extends React.Component {
  static propTypes = {
    auth: React.PropTypes.shape({
      uid: React.PropTypes.string.isRequired
    })
  };

  handleLogin = () => {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  render() {
    return (
      <div className='login-links chat-box__login-links'>
        <div className='login-links__why'>To get involved in the chat, you need to login</div>
        <div className='login-links__login-options'>
          <FlatButton onTouchTap={this.handleLogin} label='Login With Facebook' />
        </div>
      </div>
    );
  };
}
