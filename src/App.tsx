import { Route, Routes } from "react-router";

import './index.css'
import { MainComp } from "./commponents/pages/Main";
import { Regust } from "./commponents/pages/reg";
import { Login } from "./commponents/pages/login";
import Anceta from "./commponents/pages/anceta";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainComp/>}/>
      <Route path="/reg" element={<Regust/>}/>
      <Route path="/log" element={<Login/>}/>
      <Route path="/reg/anc" element={<Anceta/>}/>      
    </Routes>
  )
}





export default App;