// import {  Routes, Route } from "react-router";
import ScreenOneLogin from "./components/Screen_1/ScreenOneLogin";
import ScreenOneSignUp from "./components/Screen_1/ScreenOneSignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <ScreenOne/>
    <BrowserRouter>
			<Routes>
        
        <Route path="/" element={ <ScreenOneLogin />} />
        <Route path="/cadastro" element={ <ScreenOneSignUp />} />
			</Routes>
    </BrowserRouter>
  );
}

export default App;
