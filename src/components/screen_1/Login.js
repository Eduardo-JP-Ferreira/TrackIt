import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

export default function Login({
    emailLogin, setEmailLogin, senhaLogin, setSenhaLogin,
}){
    const {objetoLoginRecebido, setObjetoLoginRecebido} = useContext(UserContext)
    // const {nome, numero} = useContext(UserContext)
    // console.log(nome, numero)
    const navigate = useNavigate();
    // console.log("Email e Senha:",emailLogin, senhaLogin)
    const objetoLogin = {email: `${emailLogin}`, password: `${senhaLogin}`}

    function cadastrar(){
        navigate('/cadastro')
    }

    function executarLogin(event){
        event.preventDefault();
        console.log("Entrar: ",emailLogin, senhaLogin)
        // alert("olhar console")
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", objetoLogin)
        requisicao.then(resposta => {
            console.log(resposta.data)
            setObjetoLoginRecebido(resposta.data)
            navigate('/hoje')
        } )
        requisicao.catch(resposta => {
            alert(resposta.response.data.message)
        })
    }
    return(
        <ContainerTela>
            <Logo>
                <img src="assets/logo-completa.svg"></img>
            </Logo>
            <Formulario onSubmit={executarLogin}>
                <input data-test="email-input" type="email" required value={emailLogin} onChange={e => setEmailLogin(e.target.value)} placeholder="email"/>
                <input data-test="password-input" type="senha" required value={senhaLogin} onChange={e => setSenhaLogin(e.target.value)} placeholder="senha"/>
                <button data-test="login-btn" type="submit">Entrar</button>
            </Formulario>
            <Cadastro data-test="signup-link" onClick={cadastrar}>
                <p>Não tem uma conta? Cadastre-se!</p>
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