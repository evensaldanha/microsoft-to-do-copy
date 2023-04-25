import "../Style/stiloDeTarefas.css";
import { TransactionContext } from "../TransactionContext";
import { useContext } from "react";
import { Paper } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function Tarefas() {
  const { tasks, setTasks } = useContext(TransactionContext);
  return (
    <div className="flex-container"
    style={{marginLeft: "24px", marginRight: "24px"  }}>
      
        <div style={{display:"flex", color:"#2564cf" }}>
        <AddTaskIcon></AddTaskIcon>
        <h1>Tarefa</h1>
        </div>
        {tasks.map((tarefa, index) => (
          <Paper className="div-tarefas" 
          key={index}
          style={{marginTop:"20px"}}
          >
            {tarefa.title}{tarefa.description}
            
          </Paper>
        ))}  
    </div>
  )
}
