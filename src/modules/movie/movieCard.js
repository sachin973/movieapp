import React from "react";
import styled from "styled-components";
import { useHistory} from "react-router-dom"



const ContainerMl = styled.div`
  display: flex;
  margin-bottom: 142px;
  height: 100%;
`;

const ParaT = styled.p`
  width: 100%;
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #fff;
`;


const Contain = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 411px;
  border: 1px solid rgba(31, 31, 31, 0.2);
  border-radius: 10px;
`;

const DibV = styled.div`
padding: 28px 18px 0px 19px;
text-align: center;
`;
const ImgTag = styled.img`
width:100%;
height: 411px;
border-radius:10px;
// height:266px;
`
const GetButton = styled.button`
background-color: #e51937;
border-color: transparent;
padding: 10px 30px;
font-size: 15px;
font-weight: 600;
color: #fff;
border-radius: 38px;
outline: none;
letter-spacing: -.04em;
transition: all .15s ease-in-out;
`
export default function BlogCard(props) {
 
  return (
    <>

            <ContainerMl >
                <Contain>
                <div style={{position: "relative"}}>
                 {/* <img src="images/RectBlog.png" width="400px " height="195px " alt=" logo"/> */}
                 <ImgTag src={props?.LogoR} />
                 </div>
                 <DibV>
                   <ParaT>{props?.ParaN}</ParaT>
                   <ParaT>{props?.Year}</ParaT>
                   <GetButton>Get Tickets</GetButton>
                 </DibV>

               </Contain>
               </ContainerMl>
                </>
  );
}
