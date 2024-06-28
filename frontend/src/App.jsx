import { Routes ,Route,BrowserRouter} from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { Sendmoney } from "./pages/Sendmoney"
import { Transfer } from "./pages/Transfer"

function App() {

  return (
    <BrowserRouter>
    <Routes>

      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/send" element={<Sendmoney/>}></Route>
      <Route path="/transfered" element={<Transfer></Transfer>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
