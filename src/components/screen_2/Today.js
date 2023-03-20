import styled from "styled-components"
import UserContext from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

export default function Today(){   
    const {objetoLoginRecebido, setObjetoLoginRecebido} = useContext(UserContext)
    const [arrayToday, setArrayToday] = useState([])
    const [data, setData] = useState("")
    const [dia, setDia] = useState("")
    const [mes, setMes] = useState("")
    const [diaSemana, setDiaSemana] = useState("")
    // const mesCorreto = mes+
    const config = {
        headers: {Authorization: `Bearer ${objetoLoginRecebido.token}`}
    }
        

    useEffect(() => {
        setData(dayjs().day().toString())
        setMes(dayjs().month().toString())
        setDia(dayjs().date().toString())

        const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config)

        requisicao.then(resposta => {
            console.log(resposta.data)
            setArrayToday(resposta.data)
            inicio()
        });
    }, []);

    function inicio(){
        switch(Number(data)){
            case 0:
                setDiaSemana("Domingo")
                break;
            case 1:
                setDiaSemana("Segunda")
                break;
            case 2:
                setDiaSemana("Terça")
                break;  
            case 3:
                setDiaSemana("Quarta")
                break;
            case 4:
                setDiaSemana("Quinta")
                break;
            case 5:
                setDiaSemana("Sexta")
                break;
            case 6:
                setDiaSemana("Sabado")
                break;   
            default:
                break;   
        }
    }
    
    function teste(){
        console.log(arrayToday)
    }
    return(
        ///
        <ContainerToday>
            {console.log(data)}
            <NomePagina>
                <h1 data-test="today">{`${diaSemana}, ${dia}/${Number(mes)+1}`}</h1>
            </NomePagina>
       
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
const NomePagina = styled.div`
width: 100%;
margin-top: 28px;
display: flex;
justify-content: space-between;

    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-left: 17px;
    }
`