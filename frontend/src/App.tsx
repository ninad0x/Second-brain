// import { Dashboard } from "./pages/dashboard"
import { Signin } from "./pages/Signin"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Dashboard } from "./pages/dashboard"

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
    </Routes>
  </BrowserRouter>
  
}

export default App
