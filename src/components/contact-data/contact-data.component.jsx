import React from "react";
import {ReactComponent as DeleteIcon} from '../../assets/circle-minus-solid.svg';
import './contact-data.styles.css';

const ContactData = ({name,email,phoneNumber,handleClick})=>(
    <div>
        <h4>{name}</h4>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <DeleteIcon className="delete-icon" onClick={()=>{handleClick(name,email,phoneNumber)}}/>
    </div>
);

export default ContactData; 