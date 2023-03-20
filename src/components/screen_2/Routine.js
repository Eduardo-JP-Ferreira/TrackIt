import { useEffect, useState } from "react"
import styled from "styled-components"
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { ThreeDots  } from  'react-loader-spinner'

export default function Routine() {
    const {objetoLoginRecebido, setObjetoLoginRecebido} = useContext(UserContext)
    const [formAtivo, setFormAtivo] = useState(false)
    const [nomeHabito, setNomeHabito] = useState("")
    const [diasHabito, setDiasHabito] = useState("")
    const [days, setDiasClicados] = useState([])
    const [resposta, setResposta] = useState("")
    const [desabilitar, setDesabilitar] = useState(false)
    const [arrayHabitos, setArrayHabitos] = useState([])

    const navigate = useNavigate();

    const config = {
        headers: {Authorization: `Bearer ${objetoLoginRecebido.token}`}
    }
    const bodyPost = {
        name: `${nomeHabito}`,
        days
    }
    function abrirForm(event){
        event.preventDefault();
        setFormAtivo(true)
    }
    function fecharForm(event){
        event.preventDefault();
        setFormAtivo(false)
    }
    function enviarForm(event){
        event.preventDefault();

        if(days.length>0){
            setDesabilitar(true)
            console.log(config)
            console.log(bodyPost)

            const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", bodyPost, config);
            promessa.then(res => {
                setFormAtivo(false)
                setResposta(res.data)
                setDesabilitar(false)
                
                // navigate('/habitos')
                // const resetaArray = [...arrayHabitos]
                // setArrayHabitos([...arrayHabitos, res.data])
                const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config)

                requisicao.then(resposta => {
                    console.log(resposta.data)
                    setArrayHabitos(resposta.data)
                });
            })
            promessa.catch(erro => {
                alert(erro.response.data.message)
                setDesabilitar(false)
            
            })
        }
        else{
            alert("Selecione ao menos um Dia")
        }
    }
    function cliqueDia(dia){
        console.log(days)
        if(days.includes(Number(dia))){
            console.log("INCLUDES")
            let indice = days.indexOf(Number(dia))

            days.splice(indice, 1)
            const novoArray = [...days]
            setDiasClicados(novoArray)
        }
        else{
            setDiasClicados([...days, Number(dia)])
        }
    }
    function deletarHabito(id){
        if (window.confirm("Delete the item?")) {
            
            const promessa = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            promessa.then(res =>{
                const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config)

                requisicao.then(resposta => {
                    console.log(resposta.data)
                    setArrayHabitos(resposta.data)
                });
            })
        }
    }
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config)

        requisicao.then(resposta => {
            console.log(resposta.data)
            setArrayHabitos(resposta.data)
        });
    }, []);
   
    return (
        <ContainerRoutine>
            <NomePagina>
                <h1>Meus hábitos</h1>
                <BotaoMais data-test="habit-create-btn" onClick={abrirForm}>+</BotaoMais>
            </NomePagina>
            {formAtivo === true ? 

            <Formulario data-test="habit-create-container" onSubmit={enviarForm}>
                <FormNome disabled={desabilitar}  data-test="habit-name-input"  type="name" required value={nomeHabito} onChange={e => setNomeHabito(e.target.value)} placeholder="nome do hábito"/>
                <Dias>
                    <FormDia disabled={desabilitar}  data-test="habit-day" value="7" 
                        cor={days.includes(7) || days.includes("7") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>D</FormDia>
                    <FormDia disabled={desabilitar} data-test="habit-day" value="1" 
                        cor={days.includes(1) || days.includes("1") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>S</FormDia>
                    <FormDia disabled={desabilitar} data-test="habit-day" value="2" 
                        cor={days.includes(2) || days.includes("2") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>T</FormDia>
                    <FormDia disabled={desabilitar} data-test="habit-day" value="3" 
                        cor={days.includes(3) || days.includes("3") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>Q</FormDia>
                    <FormDia disabled={desabilitar} data-test="habit-day" value="4" 
                        cor={days.includes(4) || days.includes("4") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>Q</FormDia>
                    <FormDia disabled={desabilitar} data-test="habit-day" value="5" 
                        cor={days.includes(5) || days.includes("5") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>S</FormDia>
                    <FormDia disabled={desabilitar} data-test="habit-day" value="6" 
                        cor={days.includes(6) || days.includes("6") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>S</FormDia>
                </Dias>
                <Envio >
                    <Cancelar disabled={desabilitar} data-test="habit-create-cancel-btn" onClick={fecharForm}>Cancelar</Cancelar>
                    <Salvar disabled={desabilitar} data-test="habit-create-save-btn" type="submit" >{desabilitar===true ?   
                <ThreeDots 
                    height="11" 
                    width="40" 
                    radius="3"
                    color="white" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> 
                : "Salvar"}</Salvar>
                </Envio>
            </Formulario>
            
            : ""}
            <Conteudo>
                {console.log("a",arrayHabitos)}
                {arrayHabitos.length !== 0 ? 

                    arrayHabitos.map((item)=>
                        <ContainerRoutineFeito data-test="habit-container">
                            <TituloHabito>
                                <p data-test="habit-name">{item.name}</p>
                            </TituloHabito>
                            <Delete data-test="habit-delete-btn" onClick={()=>deletarHabito(item.id)}><ion-icon name="trash-outline"></ion-icon></Delete>
                            <DiasHabito>
                                <FormDiaHabito disabled={desabilitar} data-test="habit-day" value="7" 
                                    cor={item.days.includes(7) || item.days.includes('7')  ? "#CFCFCF" : "white"}>D</FormDiaHabito>
                                <FormDiaHabito disabled={desabilitar} data-test="habit-day" value="1" 
                                    cor={item.days.includes(1) || item.days.includes('1') ? "#CFCFCF" : "white"}>S</FormDiaHabito>
                                <FormDiaHabito disabled={desabilitar} data-test="habit-day" value="2" 
                                    cor={item.days.includes(2) || item.days.includes('2') ? "#CFCFCF" : "white"}>T</FormDiaHabito>
                                <FormDiaHabito disabled={desabilitar} data-test="habit-day" value="3" 
                                    cor={item.days.includes(3) || item.days.includes('3') ? "#CFCFCF" : "white"}>Q</FormDiaHabito>
                                <FormDiaHabito disabled={desabilitar} data-test="habit-day" value="4" 
                                    cor={item.days.includes(4) || item.days.includes('4') ? "#CFCFCF" : "white"}>Q</FormDiaHabito>
                                <FormDiaHabito disabled={desabilitar} data-test="habit-day" value="5" 
                                    cor={item.days.includes(5) || item.days.includes('5') ? "#CFCFCF" : "white"}>S</FormDiaHabito>
                                <FormDiaHabito disabled={desabilitar} data-test="habit-day" value="6" 
                                    cor={item.days.includes(6) || item.days.includes('6') ? "#CFCFCF" : "white"}>S</FormDiaHabito>
                            </DiasHabito>
                        </ContainerRoutineFeito>
                    )
                
                : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!</p>}
           

                
            </Conteudo>
        </ContainerRoutine>
    )
}
const ContainerRoutine = styled.div`
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
const BotaoMais = styled.button`
width: 40px;
height: 35px;
background-color: #52B6FF;
border-radius: 5px;
border: none;
margin-right: 18px;
color: white;
cursor: pointer;
`

const Conteudo = styled.div`
width: 100%;
margin-top: 17px;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        margin-left: 17px;
        color: #666666;
    }
`
const Formulario = styled.form`
width: 340px;
height: 180px;
background-color: white;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
margin-top: 20px;
`

const FormNome =styled.input`
width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-top: 18px;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 20px;
line-height: 25px;
padding: 10px;

    ::placeholder{
        color: #DBDBDB;
    }
`

const Dias = styled.div`
width: 303px;
height: 30px;
margin-top: 8px;
display: flex;
`
const FormDia = styled.option`
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
margin-right: 4px;
background-color: ${props=> props.cor};
border: 1px solid #D5D5D5;
border-radius: 5px;
color: ${props=> props.cor==="#CFCFCF" ? "white" : "#DBDBDB"};
cursor: pointer;

`

const Envio = styled.div`
width: 176px;
display: flex;
justify-content: space-between;
align-items: center;
color: #52B6FF;
position: absolute;
right: 16px;
bottom: 15px;
    p{
        cursor: pointer;
    }
`
const Cancelar = styled.button`
/* pointer-events: ${props => props.clique === true ? "none" : "all"};
cursor: pointer; */
width: 84px;
height: 35px;
background-color: white;
border-radius: 5px;
border: none;
color: #52B6FF;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 20px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
const Salvar= styled.button`
width: 84px;
height: 35px;
background-color: #52B6FF;
border-radius: 5px;
border: none;
color: white;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 20px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
const ContainerRoutineFeito = styled.div`
width: 340px;
height: 91px;
margin-left: 17px;
background-color: white;
margin-bottom: 10px;
display: flex;
flex-direction: column;
position: relative;
`
const TituloHabito = styled.div`
width: 100%;
height: 25px;
/* margin-left: 15px; */
margin-top: 13px;
/* background-color: lightblue; */
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }

`
const Delete = styled.div`
width: 13px;
height: 15px;
position: absolute;
top: 11px;
right: 10px;
z-index: 1;
`
const DiasHabito = styled.div`
display: flex;
margin-left: 15px;
margin-top: 10px;
`
const FormDiaHabito = styled.option`
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
margin-right: 4px;
background-color: ${props=> props.cor};
border: 1px solid #D5D5D5;
border-radius: 5px;
color: ${props=> props.cor==="#CFCFCF" ? "white" : "#DBDBDB"};
cursor: pointer;

`