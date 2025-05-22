import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import login from "./pages/login"
import home from "./pages/home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={login} />
        <Route path="/home" Component={home} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
