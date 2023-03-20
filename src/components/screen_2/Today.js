import styled from "styled-components"
import UserContext from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

export default function Today(){   
    const {objetoLoginRecebido, setObjetoLoginRecebido} = useContext(UserContext)
    const [arrayToday, setArrayToday] = useState([])
    const [data, setData] = useState(dayjs().day().toString())
    const [dia, setDia] = useState(dayjs().date().toString())
    const [mes, setMes] = useState(dayjs().month().toString())
    const [diaSemana, setDiaSemana] = useState("")
    const [mesCorrigido, setMesCorrigido] = useState("")
    // const mesCorreto = mes+
    const config = {
        headers: {Authorization: `Bearer ${objetoLoginRecebido.token}`}
    }
        

    useEffect(() => {
        // setData(dayjs().day().toString())
        // setMes(dayjs().month().toString())
        // setDia(dayjs().date().toString())

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

        switch(Number(mes)+1){
            case 1:
                setMesCorrigido("01")
                break;
            case 2:
                setMesCorrigido("02")
                break;  
            case 3:
                setMesCorrigido("03")
                break;
            case 4:
                setMesCorrigido("04")
                break;
            case 5:
                setMesCorrigido("05")
                break;
            case 6:
                setMesCorrigido("06")
                break;
            case 7:
                setMesCorrigido("07")
                break;
            case 8:
                setMesCorrigido("08")
                break; 
            case 9:
                setMesCorrigido("09")
                break;
            case 10:
                setMesCorrigido("10")
                break;
            case 11:
                setMesCorrigido("11")
                break;
            case 12:
                setMesCorrigido("12")
                break;             
            default:
                break;   
        }

        const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config)

        requisicao.then(resposta => {
            console.log(resposta.data)
            setArrayToday(resposta.data)
            
        });
    }, []);

    // function inicio(){
    //     switch(Number(data)){
    //         case 0:
    //             setDiaSemana("Domingo")
    //             break;
    //         case 1:
    //             setDiaSemana("Segunda")
    //             break;
    //         case 2:
    //             setDiaSemana("Terça")
    //             break;  
    //         case 3:
    //             setDiaSemana("Quarta")
    //             break;
    //         case 4:
    //             setDiaSemana("Quinta")
    //             break;
    //         case 5:
    //             setDiaSemana("Sexta")
    //             break;
    //         case 6:
    //             setDiaSemana("Sabado")
    //             break;   
    //         default:
    //             break;   
    //     }
    // }
    
    function teste(){
        console.log(arrayToday)
    }
    return(
        //
        <ContainerToday>
            {console.log(data)}
            <NomePagina>
                <h1 data-test="today">{`${diaSemana}, ${dia}/${mesCorrigido}`}</h1>
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