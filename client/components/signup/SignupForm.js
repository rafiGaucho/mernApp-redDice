import React, {PropTypes} from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map'

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username:'',
      email:'',
      password:'',
      passwordConfirmation:'',
      timeZone:''
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  onChange (e){
    this.setState({ [e.target.name] : e.target.value })
  }
  onSubmit (e){
    e.preventDefault();
    this.props.userSignupRequest(this.state)
  }
  render() {
    const options= map(timezones ,(key,val)=>
      <option key={key} value={key}>{val}</option>
    )
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join Our Community!</h1>

        <div className="form-group">
          <label className="control-label">username</label>
          <input
            value={this.state.username}
            type="text"
            name="username"
            onChange={this.onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">email</label>
          <input
            value={this.state.email}
            type="text"
            name="email"
            onChange={this.onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">password</label>
          <input
            value={this.state.password}
            type="text"
            name="password"
            onChange={this.onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">passwordConfirmation</label>
          <input
            value={this.state.passwordConfirmation}
            type="text"
            name="passwordConfirmation"
            onChange={this.onChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
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
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>

      </form>
    );
  }
}
