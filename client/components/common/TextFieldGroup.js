import React from 'react'
import classnames from 'classnames'

const TextFieldGroup=({error,label,value,type,field,onChange})=>{
  return (
    <div className={classnames("form-group",{'has-error':error})}>
      <label className="control-label">{label}</label>
      <input
        value={value}
        type={type}
        name={field}
        onChange={onChange}
        className="form-control"
      />
      {error &&
        <span className="help-block">{error}</span>}
    </div>
  );
}
TextFieldGroup.propTypes={
  error:React.PropTypes.string,
  label:React.PropTypes.string.isRequired,
  value:React.PropTypes.string.isRequired,
  type:React.PropTypes.string.isRequired,
  field:React.PropTypes.string.isRequired,
  onChange:React.PropTypes.func.isRequired,
}

TextFieldGroup.defaultProps={
  type:'text'
}


export default TextFieldGroup
