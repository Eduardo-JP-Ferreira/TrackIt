
import ScreenOneLogin from "./components/screen_1/ScreenOneLogin";
import ScreenOneSignUp from "./components/screen_1/ScreenOneSignUp";
import ScreenTwoToday from "./components/screen_2/ScreenTwoToday";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [emailLogin, setEmailLogin] = useState("")
  const [senhaLogin, setSenhaLogin] = useState("")
  const [emailCadastro, setEmailCadastro] = useState("")
  const [senhaCadastro, setSenhaCadastro] = useState("")
  const [nomeCadastro, setNomeCadastro] = useState("")
  const [fotoCadastro, setFotoCadastro] = useState("")
  const [objetoLoginRecebido, setObjetoLoginRecebido] = useState(undefined)


  return (

    <BrowserRouter>
			<Routes>
        
        <Route path="/" element={ <ScreenOneLogin 
        emailLogin={emailLogin} setEmailLogin={setEmailLogin}
        senhaLogin={senhaLogin} setSenhaLogin={setSenhaLogin}
        objetoLoginRecebido={objetoLoginRecebido} setObjetoLoginRecebido={setObjetoLoginRecebido}
        />} />
        <Route path="/cadastro" element={ <ScreenOneSignUp 
        emailCadastro={emailCadastro} setEmailCadastro={setEmailCadastro} 
        senhaCadastro={senhaCadastro} setSenhaCadastro={setSenhaCadastro}
        nomeCadastro={nomeCadastro} setNomeCadastro={setNomeCadastro}
        fotoCadastro={fotoCadastro} setFotoCadastro={setFotoCadastro}
        />} />
        <Route path="/hoje" element={ <ScreenTwoToday objetoLoginRecebido={objetoLoginRecebido} setObjetoLoginRecebido={setObjetoLoginRecebido}
        />} />
			</Routes>
    </BrowserRouter>
  );
}

export default App;
