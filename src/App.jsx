import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import login from "./pages/login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={login} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
