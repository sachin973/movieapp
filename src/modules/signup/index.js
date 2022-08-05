import React, { Component } from "react";
import SignUpComponent from "./signUpComponent";
import SecondHeader from "../../common/components/secondHeader";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      Email: "",
      EmailError: "",
      Country: "",
      CountryError: "",
      mobile: "",
      mobileError: "",
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
    };
  }
  componentDidMount() {}
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = () => {
    const firstNameError = !this.state.firstName
      ? "please enter the first name"
      : "";
    const lastNameError = !this.state.lastName
      ? "please enter the last name"
      : "";
    const EmailError = !this.state.Email ? "please enter the email" : "";
    const CountryError = !this.state.Country ? "please enter the country" : "";
    const mobileError = !this.state.mobile ? "please enter the mobile" : "";
    const passwordError = !this.state.password ? "please enter the mobile" : "";
    const confirmPasswordError = !this.state.confirmPassword
      ? "please enter the mobile"
      : "";

    this.setState({
      firstNameError: firstNameError,
      lastNameError: lastNameError,
      EmailError: EmailError,
      CountryError: CountryError,
      mobileError: mobileError,
      passwordError: passwordError,
      confirmPasswordError: confirmPasswordError,
    });
  };
  render() {
    return (
      <>
        <SecondHeader />
        <SignUpComponent
          state={this.state}
          formSubmit={this.formSubmit}
          handleChange={this.handleChange}
        />

      </>
    );
  }
}

export default SignUp;
