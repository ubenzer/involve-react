import React from "react";
import {Field, reduxForm} from "redux-form";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

class AddMessage extends React.Component {
  static propTypes = {
    handleNewMessage: React.PropTypes.func.isRequired
  };

  handleNewMessage = (values) => {
    let {handleNewMessage, reset} = this.props;
    handleNewMessage(values);
    reset();
  }

  renderTextField({input, label, meta: {touched, error}, ...custom}) {
    return <TextField hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleNewMessage)}>
        <Field name='firstName' component={this.renderTextField} hintText='Type your message' fullWidth />
        <FlatButton label='Send' primary type="submit"/>
      </form >
    );
  };
}

export default AddMessage = reduxForm({
  form: "AddMessage"
})(AddMessage);
