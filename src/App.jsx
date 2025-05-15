import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import login from "./pages/login"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" />
    </Routes>
    </BrowserRouter>
  )
}

export default App
