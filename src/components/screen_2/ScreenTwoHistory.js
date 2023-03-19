import History from "./History"
import Topo from "./Topo"
import Menu from "./Menu"
import styled from "styled-components"

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
background-color: white;
width: 375px;
height: 667px;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Lexend Deca', sans-serif;
position: relative;
`