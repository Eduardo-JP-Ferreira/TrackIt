import SignUp from "./SignUp"
// import { useNavigate } from "react-router-dom"
// import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function ScreenOneSignUp({
    emailCadastro, setEmailCadastro, senhaCadastro, setSenhaCadastro,
    nomeCadastro, setNomeCadastro, fotoCadastro, setFotoCadastro}){
    
    return(
        // <BrowserRouter>
		// 	<Routes>
		// 		<Route path="/" element={ <Login />} />
        //         <Route path="/cadastro" element={ <SignUp />} />
		// 		{/* <Route path="/contato" element={<Contato />}/> */}
		// 	</Routes>
        // </BrowserRouter>
        <SignUp 
        emailCadastro={emailCadastro} setEmailCadastro={setEmailCadastro} 
        senhaCadastro={senhaCadastro} setSenhaCadastro={setSenhaCadastro}
        nomeCadastro={nomeCadastro} setNomeCadastro={setNomeCadastro}
        fotoCadastro={fotoCadastro} setFotoCadastro={setFotoCadastro}
        />
        
    )
}