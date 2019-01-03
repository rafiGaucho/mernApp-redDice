import express from 'express'
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router=express.Router();

function validInput(data) {
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
    errors.passwordConfirmation="passwordConfirmation is Required"
  }
  if(!Validator.equals(data.password,data.passwordConfirmation)){
    errors.passwordConfirmation="password must match"
  }
  if(Validator.isNull(data.timeZone)) {
    errors.timeZone="timeZone is Required"
  }
  return {
    errors,
    isValid:isEmpty(errors)
  };
}

router.post('/',(req,res)=>{
  const {errors,isValid}=validInput(req.body);

  if(!isValid){
    res.json(errors)
  }
})

export default router
