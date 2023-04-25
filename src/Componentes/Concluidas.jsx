import { useEffect, useState } from "react"
import { TransactionContext } from "../TransactionContext";
import { useContext } from "react";
import  Tarefa  from "./MeuDia/TarefaAdc";


export default function Completed() {
    const { tasks, setTasks } = useContext(TransactionContext);
    const [completed, setCompleted] = useState([false])

    useEffect(() => {
        setCompleted(() => tasks.filter((tarefa) => tarefa.completed === true))
    }, [tasks])

    return (
        <div 
        style={{marginLeft: "24px", marginRight: "24px"  }}>
                {completed.map(tarefa =>
                        <Tarefa 
                            completed={tarefa.completed}
                            name={tarefa.title}
                            description={tarefa.description}
                        >
                        </Tarefa>
                    )
                }
        </div>
    )
}
