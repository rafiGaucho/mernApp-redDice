import React, {PropTypes} from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map'
import classnames from 'classnames'
import validInput from '../../../server/shared/validation/signup'
import TextFieldGroup from '../common/TextFieldGroup'

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username:'',
      email:'',
      password:'',
      passwordConfirmation:'',
      timeZone:'',
      errors:{}
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  onChange (e){
    this.setState({ [e.target.name] : e.target.value })
  }
  isValid(){
    const {errors,isValid}=validInput(this.state)
    if (!isValid) {
      this.setState({errors})
    }
    return isValid;
  }
  onSubmit (e){
    e.preventDefault();
    if (this.isValid()) {
      this.setState({errors: {},isLoading:true})
      this.props.userSignupRequest(this.state).then(
        ({ data }) => {this.setState({ errors: data, isLoading: false })}
      ).catch(err=>{console.log(err);this.setState({isLoading:false})})

    }
  }
  render() {
    const {errors}=this.state
    const options= map(timezones ,(key,val)=>
      <option key={key} value={key}>{val}</option>
    )
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join Our Community!</h1>

      <TextFieldGroup
        error={errors.username}
        label="Username"
        value={this.state.username}
        field="username"
        onChange={this.onChange}
      />

      <TextFieldGroup
        error={errors.email}
        label="Email"
        value={this.state.email}
        field="email"
        onChange={this.onChange}
      />
      <TextFieldGroup
        error={errors.password}
        label="Password"
        value={this.state.password}
        field="password"
        onChange={this.onChange}
      />
      <TextFieldGroup
        error={errors.passwordConfirmation}
        label="Password Confirmation"
        value={this.state.passwordConfirmation}
        field="passwordConfirmation"
        onChange={this.onChange}
      />

        <div className={classnames("form-group",{'has-error':errors.timeZone})}>
          <label className="control-label">Time Zone</label>
          <select
            className="form-control"
            name="timeZone"
            value={this.state.timeZone}
            onChange={this.onChange}
            >
              <option value="" disabled>Choose your Timezone</option>
              {options}
            </select>
            {errors.timeZone &&
              <span className="help-block">{errors.timeZone}</span>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>

      </form>
    );
  }
}
