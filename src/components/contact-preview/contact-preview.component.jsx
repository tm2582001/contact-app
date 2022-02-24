import React from "react";
import ContactData from "../contact-data/contact-data.component";
import Popup from "../popup/popup.component";
import "./contact-preview.styles.css";

class ContactPreview extends React.Component {
  constructor() {
    super();
    this.state = { contactList: [], displayPopup: false, deleteRequest: null };
  }

  componentDidMount() {
    let contactList = JSON.parse(localStorage.getItem("contactList"));
    this.setState({ contactList: contactList }, () => {
      console.log(this.state.contactList);
    });
  }

  deleteContact = ()=>{
    let {contactList,deleteRequest} = this.state;
    contactList.splice(deleteRequest,1);
    this.setState({contactList:contactList, displayPopup:false,deleteRequest:null});
    localStorage.setItem("contactList",JSON.stringify(contactList));
  }

  openDeletePopup = (contactIndex)=>{
    console.log(contactIndex);
    this.setState({displayPopup:true,deleteRequest:contactIndex},()=>{
        console.log(this.state);
    })
  }

  closeDeletePopup = ()=>{
    this.setState({displayPopup:false, deleteRequest: null});
  }

  render() {
    let { contactList,displayPopup} = this.state;
    return (
      <div>
      {
          displayPopup?<Popup yesClickEvent = {this.deleteContact} noClickEvent= {this.closeDeletePopup}/>:null
      }
        {contactList.map(({ ...otherContactProps }, index) => (
          <ContactData key={index} id={index} handleClick = {this.openDeletePopup} {...otherContactProps} />
        ))}
      </div>
    );
  }
}

export default ContactPreview;
