import Login from "./Login"
// import { useNavigate } from "react-router-dom"
// import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function ScreenOneLogin({
    emailLogin, setEmailLogin, senhaLogin, setSenhaLogin,
    objetoLoginRecebido, setObjetoLoginRecebido
}){
    
    return(
        
        <Login emailLogin={emailLogin} setEmailLogin={setEmailLogin}
        senhaLogin={senhaLogin} setSenhaLogin={setSenhaLogin}
        objetoLoginRecebido={objetoLoginRecebido} setObjetoLoginRecebido={setObjetoLoginRecebido}
        />
        
    )
}