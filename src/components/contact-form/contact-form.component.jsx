import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./contact-form.styles.css";

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let constactList = JSON.parse(localStorage.getItem("contactList"));

    if (!constactList) {
      constactList = [];
    }
    constactList.push(this.state);

    localStorage.setItem("contactList", JSON.stringify(constactList));

    this.setState({ name: "", email: "", phoneNumber: "" });
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            label="name"
            handleChange={this.handleChange}
            value={this.state.name}
            required
          />
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
          />
          <FormInput
            name="phoneNumber"
            type="tel"
            label="Phone Number"
            handleChange={this.handleChange}
            value={this.state.phoneNumber}
            required
          />
          <CustomButton type="submit">Add Contact</CustomButton>
        </form>
      </div>
    );
  }
}

export default ContactForm;
