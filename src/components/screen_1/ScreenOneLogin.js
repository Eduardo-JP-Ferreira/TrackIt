import Login from "./Login"
// import { useNavigate } from "react-router-dom"
// import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function ScreenOneLogin({
    emailLogin, setEmailLogin, senhaLogin, setSenhaLogin,
    objetoLoginRecebido, setObjetoLoginRecebido
}){
    
    return(
        // <BrowserRouter>
		// 	<Routes>
		// 		<Route path="/" element={ <Login />} />
        //         <Route path="/cadastro" element={ <SignUp />} />
		// 		{/* <Route path="/contato" element={<Contato />}/> */}
		// 	</Routes>
        // </BrowserRouter>
        <Login emailLogin={emailLogin} setEmailLogin={setEmailLogin}
        senhaLogin={senhaLogin} setSenhaLogin={setSenhaLogin}
        objetoLoginRecebido={objetoLoginRecebido} setObjetoLoginRecebido={setObjetoLoginRecebido}
        />
        
    )
}