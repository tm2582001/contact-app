import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as DeleteIcon} from '../../assets/circle-minus-solid.svg';
import {ReactComponent as UpdateIcon} from '../../assets/pen-to-square-solid.svg';
import './contact-data.styles.css';

const ContactData = ({name,email,phoneNumber,handleClick})=>(
    <div>
        <h4>{name}</h4>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <Link to='/updatecontact' state={{name:name,email:email,phoneNumber:phoneNumber,update:true}}>
        <UpdateIcon className="icon"/></Link>
        <DeleteIcon className="icon" onClick={()=>{handleClick(name,email,phoneNumber)}}/>
    </div>
);

export default ContactData; 