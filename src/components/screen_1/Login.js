import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import { ThreeDots  } from  'react-loader-spinner'

export default function Login({
    emailLogin, setEmailLogin, senhaLogin, setSenhaLogin,
}){
    const {objetoLoginRecebido, setObjetoLoginRecebido} = useContext(UserContext)
    const navigate = useNavigate();
    const objetoLogin = {email: `${emailLogin}`, password: `${senhaLogin}`}
    const [habilitarLogin, setHabilitarLogin] = useState(false)


    function executarLogin(event){
        event.preventDefault();
        setHabilitarLogin(true)
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", objetoLogin)
        requisicao.then(resposta => {
            setObjetoLoginRecebido(resposta.data)
            navigate('/hoje')
            setHabilitarLogin(false)
        } )
        requisicao.catch(resposta => {
            alert(resposta.response.data.message)
            setHabilitarLogin(false)
        })
    }
    return(
        <ContainerTela clique = {habilitarLogin}>
            <Logo>
                <img src="assets/logo-completa.svg"></img>
            </Logo>
            <Formulario onSubmit={executarLogin} >
                <input disabled={habilitarLogin} data-test="email-input" type="email" required value={emailLogin} onChange={e => setEmailLogin(e.target.value)} placeholder="email"/>
                <input disabled={habilitarLogin} data-test="password-input" type="password" required value={senhaLogin} onChange={e => setSenhaLogin(e.target.value)} placeholder="senha"/>
                <button disabled={habilitarLogin} data-test="login-btn" type="submit">{habilitarLogin===true ?   
                <ThreeDots 
                    height="13" 
                    width="45" 
                    radius="3"
                    color="white" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> 
            : "Entrar"}</button>
            </Formulario>
            <Link to={`/cadastro`}>
                <Cadastro data-test="signup-link" >
                    <p >Não tem uma conta? Cadastre-se!</p>
                </Cadastro>
            </Link>
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
pointer-events: ${props => props.clique === true ? "none" : "all"};

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
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
       
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
        padding: 10px;
        /* color: #DBDBDB; */
        font-family: 'Lexend Deca', sans-serif;
        :disabled{
            background-color: #F2F2F2;
        }
        ::placeholder{
        color: #DBDBDB;
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
/* pointer-events: none; */
    p{
        pointer-events: none;
        /* pointer-events: ${props => props.clique === true ? "all" : "none"}; */
        :hover{
            cursor: pointer;
        }
    }
`