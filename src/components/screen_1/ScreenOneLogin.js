import Login from "./Login"
import React from "react";

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