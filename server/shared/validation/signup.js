
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validInput(data) {
  let errors={};

  if(Validator.isNull(data.username)) {
    errors.username="username is Required"
  }
  if(Validator.isNull(data.email)) {
    errors.email="EMail is Required"
  }
  if(!Validator.isEmail(data.email)) {
    errors.email="email is invalid"
  }

  if(Validator.isNull(data.password)) {
    errors.password="password is Required"
  }
  if(Validator.isNull(data.passwordConfirmation)) {
    errors.passwordConfirmation="password Confirmation is Required"
  }
  if(!Validator.equals(data.password,data.passwordConfirmation)){
    errors.passwordConfirmation="password must match"
  }
  if(Validator.isNull(data.timeZone)) {
    errors.timeZone="timezone is Required"
  }
  return {
    errors,
    isValid:isEmpty(errors)
  };
}
