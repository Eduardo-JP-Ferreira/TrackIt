import styled from "styled-components"
import UserContext from "../../context/UserContext";
import { useContext } from "react";

export default function Topo() {

    const {objetoLoginRecebido, setObjetoLoginRecebido} = useContext(UserContext)

   

    return (
        <ContainerTopo data-test="header">
            <Logo>
                <img src="assets/logo-simplificada.svg"></img>
            </Logo>
            <Foto>
                <img src={objetoLoginRecebido.image}></img>
            </Foto>
        </ContainerTopo>
    )
}

const ContainerTopo = styled.div`
background-color: #126BA5;
width: 375px;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
z-index: 2;

`

const Logo = styled.div`
width: 97px;
height: 38px;
margin-left: 16px;
`

const Foto = styled.div`
width: 51px;
height: 51px;
margin-right: 18px;
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        cursor: pointer;
    }
`