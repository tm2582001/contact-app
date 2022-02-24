import React from "react";
import './form-input.styles.css';

const FormInput = ({handleChange ,label, ...otherProps})=>(
    <div className="form-input">
        <label>{label}</label>
        <input onChange={handleChange} {...otherProps}/>
    </div>
);

export default FormInput;