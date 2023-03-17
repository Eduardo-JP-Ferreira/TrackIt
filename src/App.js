// import {  Routes, Route } from "react-router";
import ScreenOneLogin from "./components/Screen_1/ScreenOneLogin";
import ScreenOneSignUp from "./components/Screen_1/ScreenOneSignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [emailLogin, setEmailLogin] = useState("")
  const [senhaLogin, setSenhaLogin] = useState("")
  const [emailCadastro, setEmailCadastro] = useState("")
  const [senhaCadastro, setSenhaCadastro] = useState("")
  const [nomeCadastro, setNomeCadastro] = useState("")
  const [fotoCadastro, setFotoCadastro] = useState("")


  return (

    <BrowserRouter>
			<Routes>
        
        <Route path="/" element={ <ScreenOneLogin 
        emailLogin={emailLogin} setEmailLogin={setEmailLogin}
        senhaLogin={senhaLogin} setSenhaLogin={setSenhaLogin}
        />} />
        <Route path="/cadastro" element={ <ScreenOneSignUp 
        emailCadastro={emailCadastro} setEmailCadastro={setEmailCadastro} 
        senhaCadastro={senhaCadastro} setSenhaCadastro={setSenhaCadastro}
        nomeCadastro={nomeCadastro} setNomeCadastro={setNomeCadastro}
        fotoCadastro={fotoCadastro} setFotoCadastro={setFotoCadastro}
        />} />
			</Routes>
    </BrowserRouter>
  );
}

export default App;
