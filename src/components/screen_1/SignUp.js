import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { ThreeDots  } from  'react-loader-spinner'

export default function SignUp({
    emailCadastro, setEmailCadastro, senhaCadastro, setSenhaCadastro,
    nomeCadastro, setNomeCadastro, fotoCadastro, setFotoCadastro}){
    const navigate = useNavigate()
    // https://images.tcdn.com.br/img/img_prod/680735/camiseta_rick_einstein_3378_2_985b10ac6589665ffc7b74b166ffc2f6.jpg
    const objetoCadastro = {email: `${emailCadastro}`, name: `${nomeCadastro}`, image: `${fotoCadastro}`, password: `${senhaCadastro}`}
    const [habilitarCadastro, setHabilitarCadastro] = useState(false)
    
    function login(){
        navigate('/')
    }
    function executarCadastro(event){
        event.preventDefault();
        setHabilitarCadastro(true)
        console.log("Cadastrei", emailCadastro, senhaCadastro, nomeCadastro, fotoCadastro)
        // alert("Verifica Console")
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", objetoCadastro)
        requisicao.then(() => {
            navigate('/')
            setHabilitarCadastro(false)
        } )
        requisicao.catch(resposta => {
            // console.log("OBJ", objetoCadastro)
            alert(resposta.response.data.message)
            // console.log(resposta.response.data)
            setHabilitarCadastro(false)
        })
    }
    return(
        <ContainerTela clique={habilitarCadastro}>
            <Logo>
                <img src="assets/logo-completa.svg"></img>
            </Logo>
            <Formulario onSubmit={executarCadastro}>
                <input disabled={habilitarCadastro} data-test="email-input" type="email" required value={emailCadastro} onChange={e => setEmailCadastro(e.target.value)} placeholder="email"/>
                <input disabled={habilitarCadastro}data-test="password-input" type="password" required value={senhaCadastro} onChange={e => setSenhaCadastro(e.target.value)} placeholder="senha"/>
                <input disabled={habilitarCadastro}data-test="user-name-input" type="nome" required value={nomeCadastro} onChange={e => setNomeCadastro(e.target.value)} placeholder="nome"/>
                <input disabled={habilitarCadastro}data-test="user-image-input" type="foto" required value={fotoCadastro} onChange={e => setFotoCadastro(e.target.value)} placeholder="foto"/>
                <button disabled={habilitarCadastro} data-test="signup-btn" type="submit">{habilitarCadastro===true ?   
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
                : "Cadastrar"}</button>
            </Formulario>
            <Cadastro data-test="login-link" onClick={login}>
                <p>Já tem uma conta? Faça login!</p>
            </Cadastro>
        </ContainerTela>
    )
}

const ContainerTela = styled.div`
background-color: white;
width: 375px;
height: 109%;
min-height: 667px;
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
        font-family: 'Lexend Deca', sans-serif;

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
    p{
        :hover{
            cursor: pointer;
        }
    }
`