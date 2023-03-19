import styled from "styled-components"
import { ThreeDots  } from  'react-loader-spinner'
export default function History() {

    
    return (
        <ContainerHistory>
            <NomePagina>
                <h1 >Histórico</h1>
            </NomePagina>
            <Conteudo>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Conteudo>

            {/* <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#4fa94d" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            /> */}
        </ContainerHistory>
    )
}
const ContainerHistory = styled.div`
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
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-left: 17px;
    }
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