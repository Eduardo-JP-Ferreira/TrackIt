import styled from "styled-components"
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

export default function Menu() {
    const navigate = useNavigate()
    const {objetoLoginRecebido, setObjetoLoginRecebido} = useContext(UserContext)

    function goHabitos(){
        navigate('/habitos')
    }

    function goHistorico(){
        navigate('/historico')
    }

    function goHoje(){
        navigate('/hoje')
    }
    return (
        <ContainerMenu data-test="menu">
            <Base>
                <h1 data-test="habit-link" onClick={goHabitos}>Hábitos</h1>
                <h2 data-test="history-link" onClick={goHistorico}>Histórico</h2>
            </Base>
            <Hoje>
                <BotaoHoje data-test="today-link" onClick={goHoje}>Hoje</BotaoHoje>
            </Hoje>
        </ContainerMenu>
    )
}

const ContainerMenu = styled.div`

width: 375px;
height: 101px;
display: flex;
justify-content: center;
position: fixed;
bottom: 0;
z-index: 2;
`
const Base = styled.div`
background-color: #FFFFFF;
/* background-color: white; */
width: 375px;
height: 70px;
display: flex;
position: absolute;
bottom: 0;
justify-content: space-between;
align-items: center;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #52B6FF;

    h1{
        margin-left: 32px;
        cursor: pointer;
    }
    h2{
        margin-right: 32px;
        cursor: pointer;
    }
`
const Hoje = styled.div`
    z-index: 3
`
const BotaoHoje = styled.button`
border: none;
background-color: #52B6FF;
border-radius: 50%;
width: 91px;
height: 91px;

font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: white;
`