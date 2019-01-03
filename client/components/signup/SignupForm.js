import React, {PropTypes} from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map'
import classnames from 'classnames'

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
  onSubmit (e){
    this.setState({errors: {},isLoading:true})
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
      ({ data }) => {this.setState({ errors: data, isLoading: false })}
    ).catch(err=>{console.log(err);this.setState({isLoading:false})})
  }
  render() {
    const {errors}=this.state
    const options= map(timezones ,(key,val)=>
      <option key={key} value={key}>{val}</option>
    )
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join Our Community!</h1>

        <div className={classnames("form-group",{'has-error':errors.username})}>
          <label className="control-label">username</label>
          <input
            value={this.state.username}
            type="text"
            name="username"
            onChange={this.onChange}
            className="form-control"
          />
          {errors.username &&
            <span className="help-block">{errors.username}</span>}
        </div>
        <div className={classnames("form-group",{'has-error':errors.email})}>
          <label className="control-label">email</label>
          <input
            value={this.state.email}
            type="text"
            name="email"
            onChange={this.onChange}
            className="form-control"
          />
          {errors.email &&
            <span className="help-block">{errors.email}</span>}
        </div>
        <div className={classnames("form-group",{'has-error':errors.password})}>
          <label className="control-label">password</label>
          <input
            value={this.state.password}
            type="text"
            name="password"
            onChange={this.onChange}
            className="form-control"
          />
          {errors.password &&
            <span className="help-block">{errors.password}</span>}
        </div>
        <div className={classnames("form-group",{'has-error':errors.passwordConfirmation})}>
          <label className="control-label">passwordConfirmation</label>
          <input
            value={this.state.passwordConfirmation}
            type="text"
            name="passwordConfirmation"
            onChange={this.onChange}
            className="form-control"
          />
          {errors.passwordConfirmation &&
            <span className="help-block">{errors.passwordConfirmation}</span>}
        </div>

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
