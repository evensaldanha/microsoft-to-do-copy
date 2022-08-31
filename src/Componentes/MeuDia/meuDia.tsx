import { Button } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";

import "./style.css";
import { useState } from "react";
import Tarefa from "./TarefaAdc";

interface Task {
    name: string;
    description: string;
}


const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Meudia() {
    const [task, setTask] = useState<Task>({
        name: "",
        description: "",
    });
    
    const [tarefas, setTarefas] = useState<Task[]>([])

        const[ newTask, setNewTask] = useState({
        name: "",
        description: "",
    });

    const [add, setAdd] = useState<Task[]>([])


    

  return (
    <div style={{width: '100%'}}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <AcUnitIcon></AcUnitIcon>
        <ListItemText>Meu dia</ListItemText>
        <Button >...</Button>
      </div>

      <MenuItem>Opções</MenuItem>

      <label>
        <input  style={{width: "100%"}} placeholder="Nome" type="text" maxLength={100} onChange={(event) => {
            setTask(currentTask => ({ ...currentTask, name: event.target.value }))
        }}/>
      </label>

      <Button variant="outlined" size="small" onClick={(e) => setTarefas((currentTarefas) => ([...currentTarefas, task]))}>        Adcionar
      </Button>

      
        <div>
      <label>
        <input style={{width: "100%"}} placeholder="Nova Tarefa" type="text" onChange={(event) =>{setNewTask(currentNewTask => ({...currentNewTask, name: event.target.value }))}}/>
      </label>
      <Button variant= 'outlined' size='small' onClick={(e) => setAdd((currentAdd) => ([...currentAdd, newTask]))}>Adcionar</Button>
      </div>

      {
        tarefas.map((tarefa) => {
          return <Tarefa name={tarefa.name} description={tarefa.description}/>
        })
      }    
    </div>
  );
}
