// import Layout from "./components/layouts/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignIn from "./views/auth";
import Onboarding from "./views/Onboarding";
import Layout from "./components/layouts/Layout";
import Ready from "./views/Ready";
import Home from "./views/Home";


function App() {
  
  
  return (

    <BrowserRouter>
    
        <Routes>
            <Route path="/" element={  <SignIn/>}/>
        </Routes>

        <Routes>
            <Route path="/user" element={ <Layout/>}/>
        </Routes>

        <Routes>
            <Route path="/onboarding" element={  <Onboarding/>}/>
        </Routes>

        <Routes>
            <Route path="/ready" element={  <Ready/>}/>
        </Routes>

        <Routes>
            <Route path="/home" element={  <Home/>}/>
        </Routes>
    </BrowserRouter>

    
)


}



export default App;
