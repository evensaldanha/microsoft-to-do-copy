import { Routes, Route  } from "react-router-dom";
import Home from "../Componentes/Home";
import Prazo from "../Componentes/Prazo";
import Tarefas from "../Componentes/Tarefas";
import Layout from "../Layout/Layout";
import Meudia from "../Componentes/MeuDia/meuDia";
import Favoritas from "../Componentes/Favoritas";

export default function RotasDasPaginas() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/prazos" element={<Prazo/>}/>
        <Route path='/meudia' element={<Meudia/>} />
        <Route path='/favoritas' element={<Favoritas/>} />
        <Route path='/tarefas' element={<Tarefas/>} />
      </Route>
    </Routes>
  )
}
