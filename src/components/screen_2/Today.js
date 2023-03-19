import styled from "styled-components"
import UserContext from "../../context/UserContext";
import { useContext } from "react";

export default function Today(){   
    const {objetoLoginRecebido, setObjetoLoginRecebido} = useContext(UserContext)
    

    function teste(){
        console.log(objetoLoginRecebido)
    }
    return(
        <ContainerToday>
        <h1 onClick={teste}>CLIQUE</h1>
       
        </ContainerToday>
    )
}

const ContainerToday = styled.div`
background-color: #f2f2f2;
margin-top: 70px;
width: 100%;
height: 100%;
`