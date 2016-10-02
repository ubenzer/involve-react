import React from "react";
import {Field, reduxForm} from "redux-form";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

class AddMessage extends React.Component {
  static propTypes = {
    handleNewMessage: React.PropTypes.func.isRequired
  };

  renderTextField({input, label, meta: {touched, error}, ...custom}) {
    return <TextField hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />;
  }

  handleNewMessage() {
    let {handleNewMessage} = this.props;
    handleNewMessage();
  }

  render() {
    return (
      <div>
        <Field name='firstName' component={this.renderTextField} hintText='Type your message' fullWidth />
        <FlatButton label='Send' primary onClick={() => this.handleNewMessage()} />
      </div>
    );
  };
}

export default reduxForm({
  form: "AddMessage"
})(AddMessage);
