import React from "react";
import { useLocation, useNavigate,Navigate } from "react-router-dom";
import ContactForm from "../../components/contact-form/contact-form.component";
import './update-contact.styles.css';

const UpdateContact = ()=>{
    const {state} = useLocation();
    let navigate = useNavigate();
    if(!state){
        return <Navigate to="/"/>
    }
    return(<div className="update-contact">
        <ContactForm state={state}  navigate={navigate}/>
    </div>);
};

export default UpdateContact;