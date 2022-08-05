import React from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Nav = styled.div`
  background: #000;
  overflow: hidden;
  height: 109px;
  padding: 43px 46px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Logo = styled.div`
  float: left;
  color: #fff
`;
const Section = styled.div`
  float: right;
  display: flex;
`;
const Anchors = styled.p`
  padding: 0px 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #fff;
`;
const SearchImg = styled.img`
  padding: 0px 20px;
`;
const HamImg = styled.img`
  padding: 0px 20px;
`;
function SecondHeader() {
  const history = useHistory();
  const handleTrans = () => {
    history.push("/transaction")
  }
  const handleWallet = () => {
    history.push("/wallet")
  }
  const handleClaim = () => {
    history.push("/claim-new")
  }
  const handleBlog = () => {
    history.push("/blogs")
  }
  const handleRoom = () => {
    history.push("/add-room")
  }
  return (
    <div>  <Nav>
    <Logo>CompanyLogo</Logo>
    <Section>
      <Link to="/home">
      <Anchors>Home</Anchors></Link>
      {/* &nbsp;&nbsp;&nbsp; */}
     <Link to="sign-in"> <Anchors>Sign In</Anchors></Link>
     <Link to="sign-up"> <Anchors>Sign Up</Anchors></Link>

    </Section>
  </Nav></div>
  )
}

export default SecondHeader