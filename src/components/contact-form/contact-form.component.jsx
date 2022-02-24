import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./contact-form.styles.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    if(props.state){
      this.state= props.state;
    }else{

      this.state = {
        name: "",
        email: "",
        phoneNumber: "",
        update:false
      };
    }
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    let contactList = JSON.parse(localStorage.getItem("contactList"));

    // update page
    if(this.state.update){
      let {state} = this.props;

      contactList.map((contact, index) => {
        if (
          contact.name === state.name &&
          contact.email === state.email &&
          contact.phoneNumber === state.phoneNumber
        ) {
          contactList.splice(index, 1,{
            name: this.state.name,
            email:this.state.email,
            phoneNumber: this.state.phoneNumber
          });
        }

        return "successful";
      });
      // new contact page 
    }else{

      if (!contactList) {
        contactList = [];
      }
      contactList.push({
        name: this.state.name,
        email:this.state.email,
        phoneNumber: this.state.phoneNumber
      });
    }
    await localStorage.setItem("contactList", JSON.stringify(contactList));
    this.props.navigate("/");
    // this.setState({ name: "", email: "", phoneNumber: "",update:false});
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
          <CustomButton type="submit">{this.state.update?"update":"Add Contact"}</CustomButton>
        </form>
      </div>
    );
  }
}

export default ContactForm;
