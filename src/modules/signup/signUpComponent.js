import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  padding: 13% 24% 3% 24%;
  background: #000;
`;
const MainContainer = styled.div`
  // display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 15px;

`;
const LoginDiv = styled.div`
text-align: center;
}
`;
const SignupHead = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #fff;
`;
const Para = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: #fff;
  text-align: center;
  margin-top: 2rem;
`;
const NameDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 5% 0 5%;
  justify-content: space-between;
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const FirstDiv = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #fff;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 1rem;
  background: #fff;
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000;
  border: none;
`;
const EmailDiv = styled.div`
  padding: 0 5% 0 5%;
  margin-top: 1rem;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountryDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5% 0 5%;
  margin-top: 1rem;
`;
const MobileDiv = styled.div`
  width: 100%;
`;
const MobileInput = styled.input`
  width: 100%;
  height: 50px;
  margin-left: 12px;
  padding-left: 1rem;
  background: #fff;
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000;
  border: none;
`;
const VinLabel = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #fff;
`;
const MobileFlex = styled.div`
  display: flex;
`;
const PhoneCode = styled.div`
  background: #fff;
  border-radius: 5px;
  width: 60px;
  height: 51px;
  padding: 1rem 0 0 1rem;
`;
const CodeFlex = styled.div`
  display: flex;
`;
const VinDiv = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin-top: 2rem;
  width: 100%;
  padding: 0 5% 0 5%;
`;
const PassDiv = styled.div`
  display: flex;
`;
const PassInput = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 1rem;
  background: #fff;
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000;
  border: none;
`;
const EyeIcon = styled.img`
  height: 19px;
  width: 19px;
  top: 16px;
  position: relative;
  right: 36px;
`;

const LoginBtnDiv = styled.div`
  margin-top: 4rem;
  text-align: center;
`;
const LoginBtn = styled.button`
  max-width: 539px;
  width: 100%;
  height: 60px;
  background: #e51937;
  border-radius: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #ffffff;
`;
const NewDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 17rem;
  margin-top: 3rem;
`;
const Customer = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #fff;
`;
const Register = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #fff;
  padding-left: 10px;
`;
const SpanText = styled.span`
  color: red;
  font-size: 14px;
  font-family: "Roboto";
  font-style: normal;
`;
export default function SignUpComponent() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const history = useHistory();
  const handleClick = () => {
    history.push("/Login");
  };

  const onSubmit = () => {
    const first = !firstName ? "please enter the first name" : "";
    const last = !lastName ? "please enter the last name" : "";
    const Emai = !email ? "please enter the email" : "";
    const Count = !country ? "please enter the country" : "";
    const mobil = !mobile ? "please enter the mobile" : "";
    const passw = !password ? "*Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)" : "";
    const confirmPassw = !confirmPassword ? "*Password and confirm password do not match." : "";
     return setFirstNameError(first),
      setLastNameError(last),
      setEmailError(Emai),
      setCountryError(Count),
      setMobileError(mobil),
      setPasswordError(passw),
      setConfirmPasswordError(confirmPassw);
  }
  return (
    <>
      <Container>
        <MainContainer>
          <LoginDiv>
            <SignupHead>Sign Up</SignupHead>
          </LoginDiv>
          <Para>Get started with your account</Para>
          <NameDiv>
            <Div1>
              <FirstDiv>Name*</FirstDiv>
              <Input
                placeholder=" Enter First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <SpanText>{firstNameError}</SpanText>
            </Div1>
          </NameDiv>
          <EmailDiv>
            <Div2>
              <FirstDiv>Email ID*</FirstDiv>
              <Input
                placeholder="Enter Email ID"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SpanText>{emailError}</SpanText>
            </Div2>
          </EmailDiv>
          <CountryDiv>
            <MobileDiv>
              <VinLabel>Mobile Number</VinLabel>
              <MobileFlex>
                <CodeFlex>
                  <PhoneCode>+91</PhoneCode>
                </CodeFlex>
                <MobileInput
                  type="tel"
                  placeholder="Enter Mobile Number"
                  number="number"
                  required
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                
              </MobileFlex>
              <SpanText>{mobileError}</SpanText>
            </MobileDiv>
          </CountryDiv>
                     <VinDiv>
              <VinLabel>Password*</VinLabel>
              <PassDiv>
                <PassInput
                  type="text"
                  placeholder=" Enter Password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <EyeIcon src="/icons/EyeIcon.svg" alt="eye" />
                
              </PassDiv>
              <SpanText>{passwordError}</SpanText>
            </VinDiv>
            <VinDiv>
              <VinLabel>Confirm Password*</VinLabel>
              <PassDiv>
                <PassInput
                  type="text"
                  placeholder=" Re-Enter Password"
                  required
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <EyeIcon src="/icons/EyeIcon.svg" alt="eye" />
                
              </PassDiv>
              <SpanText>{confirmPasswordError}</SpanText>
            </VinDiv>
    
          <LoginBtnDiv>
            <LoginBtn onClick={onSubmit}>GET STARTED</LoginBtn>
          </LoginBtnDiv>
          <NewDiv>
            <Customer>Already have an account?</Customer>
            <Register onClick={handleClick}>Login</Register>
          </NewDiv>
        </MainContainer>
      </Container>
    </>
  );
}
