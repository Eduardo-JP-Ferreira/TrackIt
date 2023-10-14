import History from "./History"
import Topo from "./Topo"
import Menu from "./Menu"
import styled from "styled-components"
import React from "react"

export default function ScreenTwoHistory(){
    
  return(
    <ContainerScreen2>
      <Topo/>
      <History/>
      <Menu/>
    </ContainerScreen2> 
  )
}
const ContainerScreen2 = styled.div`
background-color: #f2f2f2;
width: 375px;
max-height: 667px;
min-height: 667px;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Lexend Deca', sans-serif;
position: relative;
`