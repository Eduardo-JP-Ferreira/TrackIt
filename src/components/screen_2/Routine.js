import styled from "styled-components"

export default function Routine() {

    function teste(){
        alert("Opa")
    }
    
    return (
        <ContainerRoutine>
            <NomePagina>
                <h1>Meus hábitos</h1>
                <BotaoMais data-test="habit-create-btn" onClick={teste}>+</BotaoMais>
            </NomePagina>
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