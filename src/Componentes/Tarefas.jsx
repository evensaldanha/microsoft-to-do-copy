import "../Style/stiloDeTarefas.css";
import { TransactionContext } from "../TransactionContext";
import { useContext} from "react";




export default function Tarefas() {

  const { tarefas, setTarefas } = useContext(TransactionContext);


    return (

      <div className="flex-container">
        <div className="div-tarefa">
          {tarefas.map((tarefa, index) => (
            <div
              className="div-tarefas"
              key={index}
            >
              {tarefa.name}{tarefa.description}
              
            </div>
          ))}
        </div>
      </div>

    )
}
