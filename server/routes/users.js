import express from 'express'
import validInput from '../shared/validation/signup'

let router=express.Router();


router.post('/',(req,res)=>{
  const {errors,isValid}=validInput(req.body);

  if(isValid){
    res.json({success:true})
  }else {
    res.status(400).json(errors)
  }
})

export default router
