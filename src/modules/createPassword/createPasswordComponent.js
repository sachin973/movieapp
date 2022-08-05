import React, {useState} from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const LoginBtnDiv = styled.div`
  margin-top: 7rem;
`;
const LoginBtn = styled.button`
  max-width: 539px;
  width: 100%;
  height: 60px;
  background: #3aade1;
  border-radius: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #ffffff;
`;
const ForgotPara = styled.p`
  max-width: 490px;
  width: 100%;
  margin-top: 1rem;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #676767;
  border-radius: 10px;
  transform: rotate(-0.06deg);
`;
const BackDiv = styled.div`
  padding-left: 2rem;
`;
const GoBack = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #3aade1;
`;
const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Content = styled.div`
  width: 32rem;
`;
const Container = styled.div`
  padding: 13% 24% 3% 24%;
`;
const LoginHead = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #002e5b;
`;
const MainContainer = styled.div`
  // background: #E5E5E5;
  border-radius: 15px;
  box-shadow: 10px 10px 10px 10px #e5e5e5;
  padding: 44px 0px;
`;
const LoginDiv = styled.div``;
const VinDiv = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin-top: 2rem;
  width: 30rem;
`;
const PassDiv = styled.div`
  display: flex;
`;
const PassInput = styled.input`
  width: 100%;
  max-width: 564px;
  height: 50px;
  padding-left: 1rem;
  background: rgba(181, 193, 204, 0.43);
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #959595;
`;
const EyeIcon = styled.img`
  height: 19px;
  width: 19px;
  top: 16px;
  position: relative;
  right: 36px;
`;
const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5% 0 5%;
`;
const VinLabel = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;
const SpanText = styled.span`
  color: red;
  font-size: 14px;
  font-family: "Roboto";
  font-style: normal;
`;

const CreatePasswordComponent = () => {
const [password, setPassword] = useState("");
const [passwordError, setPasswordError] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");
const [show ,setShow] = useState(false)
const handleClickShowPassword = () => {
   setShow(!show);
 };
 const [showConfirm ,setShowConfirm] = useState(false)
const handleClickShowPasswordConfirm = () => {
   setShowConfirm(!showConfirm);
 };
const history = useHistory();
const onSubmit = () => {
  const passwordError = !password ? "*Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)" : "";
  const confirmPasswordError = !confirmPassword ? "*Password and confirm password do not match." : "";

setPasswordError(passwordError)
setConfirmPasswordError(confirmPasswordError)
}
const handleClick = () => {
  if(!password || ! confirmPassword) {
    return onSubmit();
  } else
history.push("/reset-success");

}
  return (
    <>
      <Container>
        <MainContainer>
          <BackDiv>
            <GoBack>&lt; &nbsp; &nbsp;Go Back</GoBack>
          </BackDiv>
          <ForgotPasswordContainer>
            <LoginDiv>
              <LoginHead>Create New Password</LoginHead>
            </LoginDiv>
            <ForgotPara>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </ForgotPara>
            <Content>
              <Div4>
                <VinDiv>
                  <VinLabel>New Password*</VinLabel>
                  <PassDiv>
                    <PassInput
type={!show ? "password" : "text"}
                      placeholder=" Enter your New Password"
                      required
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <EyeIcon onClick={handleClickShowPassword} src="/icons/EyeIcon.svg" alt="eye" />
                  </PassDiv>
                  <SpanText>{passwordError}</SpanText>
                </VinDiv>
                <VinDiv>
                  <VinLabel>Confirm Password*</VinLabel>
                  <PassDiv>
                    <PassInput
                      placeholder="Enter your Confirm Password"
                      required
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type={!showConfirm ? "password" : "text"}
                    />
                    <EyeIcon onClick={handleClickShowPasswordConfirm} src="/icons/EyeIcon.svg" alt="eye" />
                  </PassDiv>
                  <SpanText>{confirmPasswordError}</SpanText>
                </VinDiv>
              </Div4>
              <LoginBtnDiv>
                <LoginBtn onClick={handleClick}>Change Password</LoginBtn>
              </LoginBtnDiv>
            </Content>
          </ForgotPasswordContainer>
        </MainContainer>
      </Container>
    </>
  );
};

export default CreatePasswordComponent;
