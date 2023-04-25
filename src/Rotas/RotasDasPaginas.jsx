import { Routes, Route  } from "react-router-dom";
import Home from "../Componentes/Home";
import Planejado from "../Componentes/Planejado";
import Tarefas from "../Componentes/Tarefas";
import Layout from "../Layout/Layout";
import Meudia from "../Componentes/MeuDia/meuDia";
import Favoritas from "../Componentes/Favoritas";
import Testanto from "../Componentes/teste/Testando";

export default function RotasDasPaginas() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Meudia/>} />
        <Route path='/meudia' element={<Meudia/>} />
        <Route path='/favoritas' element={<Favoritas/>} />
        <Route path="/planejado" element={<Planejado/>}/>
        <Route path='/tarefas' element={<Tarefas/>} />
        <Route path="/testando" element={<Testanto/>}/>
      </Route>
    </Routes>
  )
}
