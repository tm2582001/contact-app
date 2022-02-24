import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContactForm from "../../components/contact-form/contact-form.component";
import './update-contact.styles.css';

const UpdateContact = ()=>{
    const {state} = useLocation();
    return(<div>
        <ContactForm state={state}  navigate={useNavigate()}/>
    </div>);
};

export default UpdateContact;