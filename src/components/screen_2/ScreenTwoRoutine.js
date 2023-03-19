import Routine from "./Routine"
import Topo from "./Topo"
import Menu from "./Menu"
import styled from "styled-components"

export default function ScreenTwoRoutine(){
    
    return(
      <ContainerScreen2>
        <Topo/>
        <Routine/>
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