import React from "react";
import './form-input.styles.css';

const FormInput = ({handleChange ,label, ...otherProps})=>(
    <div>
        <label>{label}</label>
        <input onChange={handleChange} {...otherProps}/>
    </div>
);

export default FormInput;