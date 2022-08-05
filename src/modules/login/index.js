import React, { Component } from "react";
import LoginComponent from "./loginComponent";
import SecondHeader from "../../common/components/secondHeader";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vinNo: "",
      vinNoError: "",
      mobNo: "",
      mobNoError: "",
      password: "",
      // passwordError: "",
    };
  }

  componentDidMount() {}
  formSubmit = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    const vinNoError = !this.state.vinNo ? "*Please enter Correct VIN number" : "";
    const mobNoError = !this.state.mobNoError ? "*Please enter Correct mobile number" : "";  
    // const passwordError = !this.state.passwordError ? "" : "";

    this.setState({vinNoError:vinNoError, mobNoError:mobNoError})
  }

  render() {
    return (
      <>
        <SecondHeader/>
        <LoginComponent state={this.state} formSubmit={this.formSubmit} onSubmit={this.onSubmit} handleClickShowPassword={this.handleClickShowPassword}/>
      </>
    );
  }
}

export default Login;
