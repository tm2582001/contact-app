import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../../assets/circle-minus-solid.svg";
import { ReactComponent as UpdateIcon } from "../../assets/pen-to-square-solid.svg";
import { ReactComponent as UserIcon } from "../../assets/user-solid.svg";
import "./contact-data.styles.css";

const ContactData = ({ name, email, phoneNumber, handleClick }) => (
  <div className="contact-card">
    <div className="user-icon-div">
      <UserIcon className="user-icon"/>
    </div>
    <div>
      <h4 className="details">{name}</h4>
      <p className="details">{email}</p>
      <p className="details">{phoneNumber}</p>
    </div>
    <div className="icon-div">
      <Link
        to="/updatecontact"
        state={{
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          update: true,
        }}
      >
        <UpdateIcon className="icon" />
      </Link>
      <DeleteIcon
        className="icon"
        onClick={() => {
          handleClick(name, email, phoneNumber);
        }}
      />
    </div>
  </div>
);

export default ContactData;
