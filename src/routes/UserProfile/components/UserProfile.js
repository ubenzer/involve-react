import React from "react";
import {Field, reduxForm} from "redux-form";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import "./UserProfile.scss";

class UserProfile extends React.Component {
  static propTypes = {
    profile: React.PropTypes.object,
    updateProfile: React.PropTypes.func.isRequired
  };

  renderTextField({input, label, meta: {touched, error}, ...custom}) {
    return <TextField className="add-message-form__message-input" hintText={label}
                      floatingLabelText={label}
                      errorText={touched && error}
                      {...input}
                      {...custom}
    />;
  }

  componentDidMount() {
    const id = this.props.params.channel;
    console.log(id);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="profile-box">
        <form className="update-profile-form" onSubmit={handleSubmit(this.props.updateProfile)}>
          <Field name='name' component={this.renderTextField} hintText='Your name' />
          <RaisedButton primary={true} className="update-profile-form__submit-button" type="submit">SAVE</RaisedButton>
        </form>
      </div>
    );
  };
}


export default UserProfile = reduxForm({
  form: "UserProfile"
})(UserProfile);
