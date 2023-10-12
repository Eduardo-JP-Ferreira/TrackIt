import SignUp from "./SignUp"
import React from "react";

export default function ScreenOneSignUp({
    emailCadastro, setEmailCadastro, senhaCadastro, setSenhaCadastro,
    nomeCadastro, setNomeCadastro, fotoCadastro, setFotoCadastro}){
    
    return(
        
        <SignUp 
        emailCadastro={emailCadastro} setEmailCadastro={setEmailCadastro} 
        senhaCadastro={senhaCadastro} setSenhaCadastro={setSenhaCadastro}
        nomeCadastro={nomeCadastro} setNomeCadastro={setNomeCadastro}
        fotoCadastro={fotoCadastro} setFotoCadastro={setFotoCadastro}
        />
        
    )
}