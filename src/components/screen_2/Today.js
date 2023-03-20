import styled from "styled-components"
import UserContext from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function Today(){   
    const {objetoLoginRecebido, setObjetoLoginRecebido} = useContext(UserContext)
    const [arrayToday, setArrayToday] = useState([])
    const config = {
        headers: {Authorization: `Bearer ${objetoLoginRecebido.token}`}
    }

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config)

        requisicao.then(resposta => {
            console.log(resposta.data)
            setArrayToday(resposta.data)
        });
    }, []);

    function teste(){
        console.log(arrayToday)
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
display: flex;
flex-direction: column;
align-items: center;
`