import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import login from "./pages/login"
import home from "./pages/home"
import setor from "./pages/setor"
import consulta from "./pages/consulta"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={login} />
        <Route path="/home" Component={home} />
        <Route path="/setor" Component={setor} />
        <Route path="/consulta" Component={consulta}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
