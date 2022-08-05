import React,{useState} from 'react'
import styled from 'styled-components';
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';


const LoginDiv = styled.div`
// height: 747px;
// width: 800px;
`;
const Container = styled.div`
padding: 13% 24% 3% 24%;
`;
const LoginHead = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 47px;
color: #002E5B;
`;
const MainContainer = styled.div`
// background: #E5E5E5;
border-radius: 15px;
box-shadow: 10px 10px 10px 10px #E5E5E5;
padding: 44px 0px;
`;
const Content = styled.div`
width: 32rem;`;
const VinLabel = styled.label`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #000000;`;
const MobileDiv = styled.div`
margin-top: 7rem;
align-items: center;
width: 100%;`;
const MobileInput = styled.input`
max-width: 466px;
width: 100%;
height: 50px;
margin-left: 12px;
padding-left: 1rem;
background: rgba(181, 193, 204, 0.43);
border-radius: 5px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #959595;
`;
const MobileFlex = styled.div`
display: flex;`;
const PhoneCode = styled.div`
background: rgba(181, 193, 204, 0.43);
border-radius: 5px;
width: 60px;
height: 51px;
padding: 1rem 0 0 1rem;`;
const CodeFlex = styled.div`
display: flex;`;
const LoginBtnDiv = styled.div`
margin-top: 7rem;`;
const LoginBtn = styled.button`
max-width: 539px;
width: 100%;
height: 60px;
background: #3AADE1;
border-radius: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 29px;
color: #FFFFFF;
`;
const ForgotPara = styled.p`
max-width: 490px;
width: 100%;
margin-top: 1rem;
text-align: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
text-align: center;
color: #676767;
border-radius: 10px;
transform: rotate(-0.06deg);`;
const BackDiv = styled.div`
padding-left: 2rem;`;
const GoBack = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #3AADE1;`;
const ForgotPasswordContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;
const ModalBox = styled(Box)`
border-radius: 10px;
padding: 40px;
`;
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 680,
    width: "100%",
    height: "auto",
    bgcolor: 'background.paper',
    boxShadow: 24,
  };
const VerifyDiv =styled.div`
display: flex;
flex-direction: column;
align-items: center;`;
const VerifyEmail = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 47px;
color: #002E5B;
text-align: center;
`;
const CrossIcon = styled.img`
position: absolute;
right: 0;`;
const Para =styled.p`
margin-top: 2rem;
max-width: 342px;
width: 100%;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.01em;
color: #676767;
`;
const Code = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #000000;
`;
const InputDiv = styled.div`
display: grid;
grid-template-columns: auto auto auto auto auto auto;
grid-gap: 20px;
height: 51px;
`;
const Input = styled.input`
background: rgba(181, 193, 204, 0.43);
border-radius: 5px;
max-width: 78px;
width: 100%;
padding-left: 2rem;`;
const Timer = styled.p`
text-align: center;
margin-top: 1rem;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
color: #068422;
`;
const OTPDiv = styled.div`
margin-top: 3rem;`;
const VerifyBtnDiv = styled.div`
padding-left: 27px;
margin-top: 3rem;`;
const VerifyBtn = styled.button`
width: 563px;
height: 60px;
background: #3AADE1;
border-radius: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 29px;
color: #FFFFFF;
`;
const NewDiv = styled.div`
display: flex;
align-items: center;
padding-left: 10rem;
margin-top: 3rem;`;
const Customer = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
color: #000000;
`;
const Register = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
color:#002E5B;
padding-left: 10px;`
;
const SpanText = styled.span`
  color: red;
  font-size: 14px;
  font-family: "Roboto";
  font-style: normal;
`;
const ForgotPasswordComponent = (props) => {
  const { state, formSubmit, onSubmit } = props;
    const [open, setOpen] = useState(false);
    const handleClickOpen = () =>{
        setOpen(true);
    }
    const handleClose = () =>{  
        setOpen(false);
    }
    const handle = (e) => {
      console.log("sachin");
      formSubmit(e);
    };
    console.log(props,"props")
  return (
    <>
    <Container>
    <MainContainer>
    <BackDiv>
      <GoBack>&lt; &nbsp; &nbsp;Go Back</GoBack>
    </BackDiv>
    <ForgotPasswordContainer>
      <LoginDiv>
        <LoginHead>Forgot Password</LoginHead>
        </LoginDiv>
        <ForgotPara>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry.</ForgotPara>
        <Content>
        <MobileDiv>
          <VinLabel>Mobile Number</VinLabel>
          <MobileFlex>
            <CodeFlex>
            <PhoneCode>+91</PhoneCode>
            </CodeFlex>
            <MobileInput type="tel" placeholder='Enter Mobile Number' number= "number" required                   value={state?.mobNo}
                 name="mobNo" onChange={(e) => handle(e)}/>
          </MobileFlex>
          <SpanText>{state?.mobNoError}</SpanText>
        </MobileDiv>
        
        <LoginBtnDiv>
          {!state.mobNo ||  state.mobNoError === "*Please enter Correct mobile number" ?  <LoginBtn onClick={onSubmit}>SUBMIT</LoginBtn> :  <LoginBtn onClick={handleClickOpen}>SUBMIT</LoginBtn> }
          
        </LoginBtnDiv>
        </Content>
        </ForgotPasswordContainer>
    </MainContainer>
    </Container>

    {open && (
        <div>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalBox sx={style}>
            <CrossIcon
            src="/icons/circle-close.svg"
            alt="crossIcon"
            onClick={handleClose}
          />
              <VerifyDiv>
                <VerifyEmail>Verify your Email</VerifyEmail>
                 <Para>We have sent  the OTP code to the
                 ******9878 Change</Para>
                 </VerifyDiv>
                 <OTPDiv>
                <Code>Enter the code</Code>
                <InputDiv>
                <Input type="tel" />
                <Input type="tel" />
                <Input type="tel" />
                <Input type="tel" />
                <Input type="tel" />
                <Input type="tel" />
                </InputDiv>
                <Timer>00 : 30</Timer>

                <VerifyBtnDiv>
                 <VerifyBtn>Verify</VerifyBtn>
                </VerifyBtnDiv>

                <NewDiv>
            <Customer>Didn't recieve an Email ?</Customer>
            <Register>Resend</Register>
            </NewDiv>
                </OTPDiv>
            

              

              
            </ModalBox>
          </Modal>
        </div>
      )}
    </> 
  )
}

export default ForgotPasswordComponent
