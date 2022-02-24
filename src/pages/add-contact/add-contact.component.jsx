import React from 'react';
import './add-contact.styles.css';
import ContactForm from '../../components/contact-form/contact-form.component';
import { useNavigate } from 'react-router-dom';

const AddContact = ()=>(
    <div className='add-contact'>
        <ContactForm navigate={useNavigate()}/>
    </div>
);

export default AddContact;