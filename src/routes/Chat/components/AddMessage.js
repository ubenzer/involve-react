import React from "react";
import {Field, reduxForm} from "redux-form";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import "./AddMessage.scss";

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
    return <TextField className="add-message-form__message-input" hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form autoComplete="off" className="add-message-form chat-box__add_message_area" onSubmit={handleSubmit(this.handleNewMessage)}>
        <Field name='message' component={this.renderTextField} hintText='Type your message' />
        <IconButton className="add-message-form__submit-button" type="submit" iconClassName="material-icons">send</IconButton>
      </form >
    );
  };
}

export default AddMessage = reduxForm({
  form: "AddMessage"
})(AddMessage);
