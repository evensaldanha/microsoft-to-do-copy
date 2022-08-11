import { Link } from "react-router-dom";

export default function ListaDoMenu() {
  return (
    <div className="lista-do-menu">
      <Link to="/prazos">Prazo</Link>
      <div><Link to="/tarefas">Tarefas</Link></div>
    </div>
  )
}
