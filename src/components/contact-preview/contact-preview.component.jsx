import React from "react";
import ContactData from "../contact-data/contact-data.component";
import Popup from "../popup/popup.component";
import SearchBox from "../search-box/search-box.component";
import "./contact-preview.styles.css";

class ContactPreview extends React.Component {
  constructor() {
    super();
    this.state = {
      contactList: [],
      displayPopup: false,
      deleteRequest: { name: "", email: "", phoneNumber: "" },
      searchField: "",
    };
  }

  componentDidMount() {
    let contactList = JSON.parse(localStorage.getItem("contactList"));
    if (contactList) {
      contactList = contactList.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      this.setState({ contactList: contactList });
    }
  }

  deleteContact = () => {
    let { contactList, deleteRequest } = this.state;

    contactList.map((contact, index) => {
      if (
        contact.name === deleteRequest.name &&
        contact.email === deleteRequest.email &&
        contact.phoneNumber === deleteRequest.phoneNumber
      ) {
        contactList.splice(index, 1);
      }
      return "successful";
    });

    this.setState({
      contactList: contactList,
      displayPopup: false,
      deleteRequest: { name: "", email: "", phoneNumber: "" },
    });
    localStorage.setItem("contactList", JSON.stringify(contactList));
  };

  openDeletePopup = (name, email, phoneNumber) => {
    this.setState({
      displayPopup: true,
      deleteRequest: { name: name, email: email, phoneNumber: phoneNumber },
    });
  };

  closeDeletePopup = () => {
    this.setState({
      displayPopup: false,
      deleteRequest: { name: "", email: "", phoneNumber: "" },
    });
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    let { contactList, displayPopup, searchField } = this.state;
    let filterContact;

    if (contactList.length >= 1) {
      filterContact = contactList.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchField.toLowerCase()) ||
          contact.phoneNumber.includes(searchField)
      );
    }

    return (
      <div>
        <SearchBox
          placeHolder="Search Contact"
          handleChange={this.handleChange}
        />
        {displayPopup ? (
          <Popup
            yesClickEvent={this.deleteContact}
            noClickEvent={this.closeDeletePopup}
          />
        ) : null}
        {filterContact ? (
          filterContact.map(({ ...otherContactProps }, index) => (
            <ContactData
              key={index}
              handleClick={this.openDeletePopup}
              {...otherContactProps}
            />
          ))
        ) : (
          <h1>No contact</h1>
        )}
      </div>
    );
  }
}

export default ContactPreview;
