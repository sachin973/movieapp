import React, { Component } from "react";
import ForgotPasswordComponent from "./forgotPasswordComponent";
import Header from "../../common/components/header";
import FooterBar from "../../common/footerBar";

class ForgotIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobNo: "",
      mobNoError: "",
    };
  }

  componentDidMount() {}
  formSubmit = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = () => {
    const mobNoError = !this.state.mobNoError ? "*Please enter Correct mobile number" : "";  

    this.setState({mobNoError:mobNoError})
  }
  render() {
    return (
      <>
        <Header />
        <ForgotPasswordComponent state={this.state} formSubmit={this.formSubmit} onSubmit={this.onSubmit} />
        <FooterBar />
      </>
    );
  }
}

export default ForgotIndex;
