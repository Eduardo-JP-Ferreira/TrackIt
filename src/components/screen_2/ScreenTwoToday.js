import styled from "styled-components"
import Topo from "./Topo"
import Today from "./Today"
import Menu from "./Menu"
import React from "react"
export default function ScreenTwoToday(){
   
    return(
        <ContainerScreen2>
            <Topo/>
            <Today/>
            <Menu/>
        </ContainerScreen2>
    )
}

const ContainerScreen2 = styled.div`
background-color: #f2f2f2;
width: 375px;
max-height: 667px;
min-height: 667px;
/* overflow-y: scroll; */
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Lexend Deca', sans-serif;
position: relative;
`