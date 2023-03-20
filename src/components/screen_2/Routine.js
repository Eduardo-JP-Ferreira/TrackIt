import { useState } from "react"
import styled from "styled-components"
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import axios from "axios";

export default function Routine() {
    const {objetoLoginRecebido, setObjetoLoginRecebido} = useContext(UserContext)
    const [formAtivo, setFormAtivo] = useState(false)
    const [nomeHabito, setNomeHabito] = useState("")
    const [diasHabito, setDiasHabito] = useState("")
    const [days, setDiasClicados] = useState([])
    const [resposta, setResposta] = useState("")
    const [desabilitar, setDesabilitar] = useState(false)

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
                alert("foi")
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
        if(days.includes(dia)){
            console.log("INCLUDES")
            let indice = days.indexOf(dia)

            days.splice(indice, 1)
            const novoArray = [...days]
            setDiasClicados(novoArray)
        }
        else{
            setDiasClicados([...days, dia])
        }
    }
    return (
        <ContainerRoutine clique={desabilitar}>
            <NomePagina>
                <h1>Meus hábitos</h1>
                <BotaoMais data-test="habit-create-btn" onClick={abrirForm}>+</BotaoMais>
            </NomePagina>
            {formAtivo === true ? 

            <Formulario data-test="habit-create-container" onSubmit={enviarForm}>
                <FormNome disabled={desabilitar}  data-test="habit-name-input"  type="name" required value={nomeHabito} onChange={e => setNomeHabito(e.target.value)} placeholder="nome do hábito"/>
                <Dias>
                    <FormDia disabled={desabilitar}  data-test="habit-day" value="7" 
                        cor={days.includes("7") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>D</FormDia>
                    <FormDia disabled={desabilitar} data-test="habit-day" value="1" 
                        cor={days.includes("1") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>S</FormDia>
                    <FormDia disabled={desabilitar} data-test="habit-day" value="2" 
                        cor={days.includes("2") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>T</FormDia>
                    <FormDia disabled={desabilitar} data-test="habit-day" value="3" 
                        cor={days.includes("3") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>Q</FormDia>
                    <FormDia disabled={desabilitar} data-test="habit-day" value="4" 
                        cor={days.includes("4") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>Q</FormDia>
                    <FormDia disabled={desabilitar} data-test="habit-day" value="5" 
                        cor={days.includes("5") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>S</FormDia>
                    <FormDia disabled={desabilitar} data-test="habit-day" value="6" 
                        cor={days.includes("6") ? "#CFCFCF" : "white"}
                        onClick={e => cliqueDia(e.target.value)}>S</FormDia>
                </Dias>
                <Envio >
                    <p data-test="habit-create-cancel-btn" onClick={fecharForm}>Cancelar</p>
                    <Salvar data-test="habit-create-save-btn" type="submit" >Salvar</Salvar>
                </Envio>
            </Formulario>
            
            : ""}
            <Conteudo>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                     para começar a trackear!</p>
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
pointer-events: ${props => props.clique === true ? "none" : "all"};
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
        padding: 10px;
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
/* ::placeholder{
        color: #DBDBDB;
        padding: 2px;
    } */
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
cursor: pointer;
`

