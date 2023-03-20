import styled from "styled-components"
import UserContext from "../../context/UserContext";
import Porcentagem from "../../context/Porcentagem";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

export default function Today(){   
    const {objetoLoginRecebido, setObjetoLoginRecebido} = useContext(UserContext)
    const {porcentagem, setPorcentagem} = useContext(Porcentagem)
    const [arrayToday, setArrayToday] = useState([])
    const [data, setData] = useState(dayjs().day().toString())
    const [dia, setDia] = useState(dayjs().date().toString())
    const [mes, setMes] = useState(dayjs().month().toString())
    const [diaSemana, setDiaSemana] = useState("")
    const [mesCorrigido, setMesCorrigido] = useState("")
    const [habilitaPointer, setHabilitaPointer] = useState(true)
    const [qntTarefa, setQntTarefa] = useState(0)
    const [qntCheck, setQntCheck] = useState(0)
    const teste = 1
    let teste2 = 0
    // setPorcentagem(teste/qntTarefa)
    //let testarRecord =1 //Modifiquei este valor e passei como props no lugar do Seu record 
    //                          para verificar que fica cinza quando o Record é > Atual
    
    const config = {
        headers: {Authorization: `Bearer ${objetoLoginRecebido.token}`}
    }
        
    console.log("ta",qntTarefa)
    console.log("ch",teste2)
    useEffect(() => {
  
        console.log("por", porcentagem)
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
            setQntTarefa(resposta.data.length)
            setPorcentagem(
                (resposta.data.filter((item) => item.done).length /
                    resposta.data.length) * 100
            );
        })
        requisicao.catch(erro => {
            alert(erro.response.data.message)
        })
    }, []);
    
    function verificaCheck(id, feito){
        setHabilitaPointer(false)
        if(feito===false){
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, [],config)

            requisicao.then(resposta => {
                // console.log(resposta.data)
                const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config)
    
                requisicao.then(resposta => {
                    console.log(resposta.data)
                    setArrayToday(resposta.data)
                    setHabilitaPointer(true)
                    setPorcentagem(
                        (resposta.data.filter((item) => item.done).length /
                            resposta.data.length) * 100
                    );
                    
                })
                requisicao.catch(erro => {
                    alert(erro.response.data.message)
                    setHabilitaPointer(true)
                })
                
            })
            requisicao.catch(erro => {
                alert(erro.response.data.message)
                setHabilitaPointer(true)
            })
        }

        else{
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, [],config)

            requisicao.then(resposta => {
                // console.log(resposta.data)
                const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config)
    
                requisicao.then(resposta => {
                    console.log(resposta.data)
                    setArrayToday(resposta.data)
                    setHabilitaPointer(true)
                    setPorcentagem(
                        (resposta.data.filter((item) => item.done).length /
                            resposta.data.length) * 100
                    );
                    
                })
                requisicao.catch(erro => {
                    alert(erro.response.data.message)
                    setHabilitaPointer(true)
                })
                
            })
            requisicao.catch(erro => {
                alert(erro.response.data.message)
                setHabilitaPointer(true)
            })
        }
    }

    return(
        
        <ContainerToday pointer={habilitaPointer}>
            {console.log(data)}
            <NomePagina>
                <h1 data-test="today">{`${diaSemana}, ${dia}/${mesCorrigido}`}</h1>
            </NomePagina>
            <Subtitulo>
            {porcentagem!== 0 ?
                <h2 data-test="today-counter">{porcentagem.toFixed()}% dos hábitos concluídos</h2>
            :   <h1 data-test="today-counter">Nenhum hábito concluído ainda</h1>
            }
            </Subtitulo>
       
            <Conteudo>
                {arrayToday.map((item)=>
                    <ContainerHoje data-test="today-habit-container">
                       
                        <Caixa>
                            <TituloHoje>
                                <p data-test="today-habit-name">{item.name}</p>
                            </TituloHoje>
                            <Sequencia>
                                <SequenciaAtual feita={item.done}>
                                    <p >Sequência atual: </p>
                                    <h1  data-test="today-habit-sequence"> {item.currentSequence} dias</h1>
                                </SequenciaAtual>
                                <Recorde feita={item.done} maior={item.highestSequence} atual={item.currentSequence}>
                                    <p >Seu recorde: </p>
                                    <h1  data-test="today-habit-record"> {item.highestSequence} dias</h1>
                                </Recorde>
                            </Sequencia>
                        </Caixa>
                        <Check feito={item.done} onClick={()=> verificaCheck(item.id, item.done)} data-test="today-habit-check-btn"><ion-icon name="checkmark-sharp"></ion-icon></Check>
                    </ContainerHoje>
                )}
            </Conteudo>
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
pointer-events: ${props => props.pointer === true ? "all" : "none"};
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
const Subtitulo = styled.div`
width: 100%;
margin-bottom: 11px;
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;;
        margin-left: 17px;
    }
    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #8FC549;
        margin-left: 17px;
    }
`

const Conteudo = styled.div`
width: 100%;
margin-top: 17px;
display: flex;
flex-direction: column;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        margin-left: 17px;
        color: #666666;
    }
`

const ContainerHoje= styled.div`
width: 340px;
height: 91px;
margin-left: 17px;
background-color: white;
margin-bottom: 10px;
display: flex;
justify-content: space-between;
position: relative;
`
const Caixa=styled.div`

`

const TituloHoje = styled.div`
width: 100%;
height: 25px;
margin-top: 13px;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }

`
const Sequencia = styled.div`
width: 100%;
height: 32px;
margin-top: 7px;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }
    :first-child p span{
        color: red;
    }
`
const SequenciaAtual = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    
    h1{
        color: ${props=> props.feita===true ? "#8FC549" : "#666666"};
        margin-left: 4px;
    }
`
const Recorde= styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    
    h1{
        color: ${props=>  (props.maior === props.atual && props.maior !=0)  ? "#8FC549" : "#666666"};
        margin-left: 4px;
    }
`

const Check = styled.button`
border: none;
border-radius: 5px;
width: 69px;
height: 69px;
margin-top: 13px;
margin-right: 13px;
background-color: ${props=> props.feito===true ? "#8FC549;" : "#EBEBEB;"};
display: flex;
justify-content: center;
align-items: center;
    ion-icon{
        width: 70%;
        height: 80%;
        color: white
    }
`