import styled from "styled-components"
export default function Login(){
    return(
        <ContainerTela>
            <Logo>
                <img src="assets/logo-completa.svg"></img>
            </Logo>
            <Formulario>
                <input type="email" required placeholder="email"/>
                <input type="senha" required placeholder="senha"/>
                <button type="submit">Entrar</button>
            </Formulario>
            <Cadastro>
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
`