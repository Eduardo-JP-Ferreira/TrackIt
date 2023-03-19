import styled from "styled-components"
import Topo from "./Topo"
import Today from "./Today"
import Menu from "./Menu"

export default function ScreenTwoToday({objetoLoginRecebido, setObjetoLoginRecebido}){
   
    return(
        <ContainerScreen2>
            <Topo/>
            <Today/>
            <Menu/>
        </ContainerScreen2>
    )
}

const ContainerScreen2 = styled.div`
background-color: white;
width: 375px;
height: 667px;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Lexend Deca', sans-serif;
position: relative;
`