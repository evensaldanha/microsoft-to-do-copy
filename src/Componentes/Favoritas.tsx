import { useContext } from "react";
import { TransactionContext } from "../TransactionContext";
import "../Style/favoritas.css";

export default function Favoritas() {
  const { tarefas, setTarefas } = useContext(TransactionContext);

  return (
    <div className="div-favoritas">
      {tarefas
        .filter((tarefa) => {
          return tarefa.isFavorite;
        })
        .map(( tarefa, index ) => (
          <div className="div-do-map" key={index}>{tarefa.name} {tarefa.description}</div>
        ))}
    </div>
  );
}
