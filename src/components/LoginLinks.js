import React from "react";
import FlatButton from "material-ui/FlatButton";
import "./LoginLinks.scss";
import firebase from "firebase";

export default class LoginBox extends React.Component {
  static propTypes = {
    firebase: React.PropTypes.shape({
      login: React.PropTypes.func
    }).isRequired
  };

  handleLogin = () => {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().currentUser.linkWithRedirect(provider);
  }

  render() {
    return (
      <div className='login-box'>
        <div className='login-box__why'>To get involved in the chat, you need to login</div>
        <FlatButton onClick={this.handleLogin} label='Login With Facebook' />
      </div>
    );
  };
}
