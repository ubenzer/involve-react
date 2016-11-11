import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import LoginContainer from "../containers/LoginContainer";

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class LoginModal extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    handleClose: React.PropTypes.func.isRequired
  }

  render() {
    const actions = [
      <FlatButton
        label='Not Interested'
        primary
        onTouchTap={this.props.handleClose}
      />
    ];

    const {open} = this.props;

    return (
      <Dialog
        title='Login required'
        actions={actions}
        modal
        open={open}
      >
        <LoginContainer />
      </Dialog>
    );
  }
}
