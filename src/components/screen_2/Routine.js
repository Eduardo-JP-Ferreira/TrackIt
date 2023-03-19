import { useState } from "react"
import styled from "styled-components"

export default function Routine() {

    const [formAtivo, setFormAtivo] = useState(false)
    const [nomeHabito, setNomeHabito] = useState("")
    const [diasHabito, setDiasHabito] = useState("")

    function abrirForm(){
        setFormAtivo(true)
    }
    function fecharForm(){
        setFormAtivo(false)
    }

    return (
        <ContainerRoutine>
            <NomePagina>
                <h1>Meus hábitos</h1>
                <BotaoMais data-test="habit-create-btn" onClick={abrirForm}>+</BotaoMais>
            </NomePagina>
            {formAtivo === true ? 

            <Formulario>
                <FormNome type="nome" required value={nomeHabito} onChange={e => setNomeHabito(e.target.value)} placeholder="nome do hábito"/>
                <Dias>
                    <FormDia type="dia" required value="1">D</FormDia>
                    <FormDia type="dia" required value="2">S</FormDia>
                    <FormDia type="dia" required value="3">T</FormDia>
                    <FormDia type="dia" required value="4">Q</FormDia>
                    <FormDia type="dia" required value="5">Q</FormDia>
                    <FormDia type="dia" required value="6">S</FormDia>
                    <FormDia type="dia" required value="7">S</FormDia>
                </Dias>
                <Envio>
                    <p onClick={fecharForm}>Cancelar</p>
                    <Salvar type="submit">Salvar</Salvar>
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


    ::placeholder{
        color: #DBDBDB;
        padding: 10px;
    }
`

const Dias = styled.div`
width: 303px;
height: 30px;
margin-top: 8px;
/* background-color: lightcoral; */
`
const FormDia = styled.button`
width: 30px;
height: 30px;
margin-right: 4px;
background-color: white;
border: 1px solid #D5D5D5;
border-radius: 5px;
color: #DBDBDB;
cursor: pointer;
::placeholder{
        color: #DBDBDB;
        padding: 2px;
    }
`

const Envio = styled.div`
width: 176px;
display: flex;
justify-content: space-between;
/* background-color: lightcyan; */
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

