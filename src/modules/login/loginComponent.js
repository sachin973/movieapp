import React, {useState} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  padding: 13% 24% 3% 24%;
  background: #000;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 15px;

`;
const LoginDiv = styled.div`
  text-align: center;
`;
const LoginHead = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #fff;
`;
const VinDiv = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin-top: 2rem;
`;
const VinLabel = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #fff;
`;
const Input = styled.input`
  width: 100%;
  max-width: 539px;
  height: 50px;
  padding-left: 1rem;
  background: #fff;
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #959595;
  border: none;
`;
const MobileDiv = styled.div`
  margin-top: 2rem;
  align-items: center;
  width: 100%;
`;
const MobileInput = styled.input`
  max-width: 466px;
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
  color: #959595;
  border: none;
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
const PassDiv = styled.div`
  display: flex;
`;
const PassInput = styled.input`
  width: 100%;
  max-width: 564px;
  height: 50px;
  padding-left: 1rem;
  background: #fff;
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #959595;
  border: none;
`;

const LoginBtnDiv = styled.div`
  margin-top: 2rem;
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
const ForgotPassDiv = styled.div`
  margin: 1rem 0 0 23rem;
`;
const Forgot = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #fff;
`;
const EyeIcon = styled.img`
  height: 19px;
  width: 19px;
  top: 16px;
  position: relative;
  right: 36px;
`;
const NewDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10rem;
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
const Content = styled.div``;
export default function LoginComponent(props) {
  const { state, formSubmit, onSubmit } = props;
  const [show ,setShow] = useState(false)
 const handleClickShowPassword = () => {
    setShow(!show);
  };

  const handle = (e) => {
    console.log("sachin");
    formSubmit(e);
  };

  const history = useHistory();
  const handleClick = () =>{
    history.push("/sign-up")
  }
const handleClickOpen = () =>{
  history.push("/forgot-password")
}
  console.log(props.state, "props");

  return (
    <>
      <Container>
        <MainContainer>
          <LoginDiv>
            <LoginHead>Login</LoginHead>
          </LoginDiv>
          <Content>
            <VinDiv>
              <VinLabel>Email</VinLabel>
              <Input
                placeholder=" Enter Email"
                name="vinNo"
                value={state?.vinNo}
                onChange={(e) => handle(e)}
                required
              />
              <SpanText>{state?.vinNoError}</SpanText>
            </VinDiv>
            <MobileDiv>
              <VinLabel>Mobile Number</VinLabel>
              <MobileFlex>
                <CodeFlex>
                  <PhoneCode>+91</PhoneCode>
                </CodeFlex>
                <MobileInput
                  placeholder="Enter Mobile Number"
                  name="mobNo"
                  value={state?.mobNo}
                  onChange={(e) => handle(e)}
                  required
                />
              </MobileFlex>
              <SpanText>{state?.mobNoError}</SpanText>
            </MobileDiv>
            <VinDiv>
              <VinLabel>Password</VinLabel>
              <PassDiv>
                <PassInput
                  placeholder=" Enter Password"
                  name="password"
                  value={state?.password}
                  onChange={(e) => handle(e)}
                  required
                  type={!show ? "password" : "text"}
                />
                <EyeIcon onClick={handleClickShowPassword} src="/icons/EyeIcon.svg" alt="eye" />
              </PassDiv>
            </VinDiv>
            <LoginBtnDiv>
              <LoginBtn onClick={onSubmit}>LOGIN</LoginBtn>
            </LoginBtnDiv>
            <ForgotPassDiv>
             <Forgot onClick={handleClickOpen}>Forgot Password?</Forgot>
            </ForgotPassDiv>

            <NewDiv>
              <Customer>New Customer?</Customer>
              <Register onClick={handleClick}>Register</Register>
            </NewDiv>
          </Content>
        </MainContainer>
      </Container>
    </>
  );
}
