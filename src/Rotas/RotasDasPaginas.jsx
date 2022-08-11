import { Routes, Route  } from "react-router-dom";
import Prazo from "../Componentes/Prazo";
import Tarefas from "../Componentes/Tarefas";

export default function RotasDasPaginas() {
  return (
    <Routes>
        <Route path="/prazos" element={<Prazo/>}></Route>
        <Route path='/tarefas' element={<Tarefas/>}> </Route>
    </Routes>
  )
}
