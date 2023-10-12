
import ScreenOneLogin from "./components/screen_1/ScreenOneLogin";
import ScreenOneSignUp from "./components/screen_1/ScreenOneSignUp";
import ScreenTwoToday from "./components/screen_2/ScreenTwoToday";
import ScreenTwoHistory from "./components/screen_2/ScreenTwoHistory"
import ScreenTwoRoutine from "./components/screen_2/ScreenTwoRoutine"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";



import UserContext from "./context/UserContext";
import Porcentagem from "./context/Porcentagem";

function App() {
  const [emailLogin, setEmailLogin] = useState("")
  const [senhaLogin, setSenhaLogin] = useState("")
  const [emailCadastro, setEmailCadastro] = useState("")
  const [senhaCadastro, setSenhaCadastro] = useState("")
  const [nomeCadastro, setNomeCadastro] = useState("")
  const [fotoCadastro, setFotoCadastro] = useState("")
  const [objetoLoginRecebido, setObjetoLoginRecebido] = useState(undefined)
  const [porcentagem, setPorcentagem] = useState(0)

  return (

    <BrowserRouter>
    <UserContext.Provider value={{objetoLoginRecebido, setObjetoLoginRecebido}}>
    <Porcentagem.Provider value={{porcentagem, setPorcentagem}}>
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
        <Route path="/hoje" element={ <ScreenTwoToday />} />
        <Route path="/habitos" element={ <ScreenTwoRoutine/>} />
        <Route path="/historico" element={ <ScreenTwoHistory/>} />
			</Routes>
      </Porcentagem.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
