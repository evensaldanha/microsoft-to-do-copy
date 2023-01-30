import { useEffect, useState } from "react"
import { TransactionContext } from "../TransactionContext";
import { useContext } from "react";
import Tarefa from "./MeuDia/TarefaAdc";

export default function Concluidas() {
    const { tarefas, setTarefas } = useContext(TransactionContext);
    const [completed, setCompleted] = useState([false])

    useEffect(() => {
        setCompleted(() => tarefas.filter((tarefa) => tarefa.completed === true))
    }, [tarefas])

    return (
        <div>
            {completed.map(tarefa =>
                    <Tarefa
                        completed={tarefa.completed}
                        name={tarefa.name}
                        description={tarefa.description}
                    >
                    </Tarefa>
                )
            }
        </div>
    )
}
