import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import login from "./pages/login"
import home from "./pages/home"
import setor from "./pages/setor"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={login} />
        <Route path="/home" Component={home} />
        <Route path="/setor" Component={setor} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
