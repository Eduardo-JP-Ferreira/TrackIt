import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function SignUp({
    emailCadastro, setEmailCadastro, senhaCadastro, setSenhaCadastro,
    nomeCadastro, setNomeCadastro, fotoCadastro, setFotoCadastro}){
    const navigate = useNavigate()

    function login(){
        navigate(-1)
    }
    function executarCadastro(){
        console.log("Cadastrei", emailCadastro, senhaCadastro, nomeCadastro, fotoCadastro)
        alert("Verifica Console")
    }
    return(
        <ContainerTela>
            <Logo>
                <img src="assets/logo-completa.svg"></img>
            </Logo>
            <Formulario onSubmit={executarCadastro}>
                <input type="email" required value={emailCadastro} onChange={e => setEmailCadastro(e.target.value)} placeholder="email"/>
                <input type="senha" required value={senhaCadastro} onChange={e => setSenhaCadastro(e.target.value)} placeholder="senha"/>
                <input type="nome" required value={nomeCadastro} onChange={e => setNomeCadastro(e.target.value)} placeholder="nome"/>
                <input type="foto" required value={fotoCadastro} onChange={e => setFotoCadastro(e.target.value)} placeholder="foto"/>
                <button type="submit">Entrar</button>
            </Formulario>
            <Cadastro onClick={login}>
                <p>Já tem uma conta? Faça login!</p>
            </Cadastro>
        </ContainerTela>
    )
}

const ContainerTela = styled.div`
background-color: white;
width: 375px;
height: 667px;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Lexend Deca', sans-serif;
`
const Logo = styled.div`
margin-top: 68px;
margin-bottom: 40px;
    img{
        width: 180px;
        height: 178px;
    }

`
const Formulario = styled.form`
width: 305px;
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 20px 0;
font-size: 18px;

    button {
        align-self: center;
        width: 303px;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        color: white;
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;
        font-family: 'Lexend Deca', sans-serif;
       
    }
    input {
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: #DBDBDB;
        font-family: 'Lexend Deca', sans-serif;

        ::placeholder{
        color: #DBDBDB;
        padding: 10px;
    }
    }
`
const Cadastro = styled.div`
color: #52B6FF;
text-decoration: underline;
font-size: 14px;
font-weight: 400;
line-height: 18px;
font-family: 'Lexend Deca', sans-serif;
    p{
        :hover{
            cursor: pointer;
        }
    }
`