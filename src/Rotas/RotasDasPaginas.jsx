import { Routes, Route  } from "react-router-dom";
import Home from "../Componentes/Home";
import Prazo from "../Componentes/Prazo";
import Tarefas from "../Componentes/Tarefas";
import Layout from "../Layout/Layout";
import Meudia from "../Componentes/MeuDia/meuDia";
import Importante from "../Componentes/Importante";
import AtribuidoAMim from "../Componentes/AtribuidoAMim";

export default function RotasDasPaginas() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/home" element={<Home/>} />
        <Route path="/prazos" element={<Prazo/>}/>
        <Route path='/meudia' element={<Meudia/>} />
        <Route path='/importante' element={<Importante/>} />
        <Route path='/atribuidoamim' element={<AtribuidoAMim/>}/>
        <Route path='/tarefas' element={<Tarefas/>} />
      </Route>
    </Routes>
  )
}
