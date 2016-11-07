import React from "react";
import IconButton from "material-ui/IconButton";
import "./LoginBox.scss";

export default class LoginBox extends React.Component {
  static propTypes = {
    handleLogin: React.PropTypes.func.isRequired
  };

  render() {
    return (
      <div className='loginBox' />
    );
  };
}
