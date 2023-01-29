import "../Style/stiloDeTarefas.css";
// import Card from '@mui/material/Card';
// import { CardActionArea, CardHeader } from '@mui/material';
// import CardContent from '@mui/material/CardContent';
import { TransactionContext } from "../TransactionContext";
import { useContext, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Tarefas() {

  const { tarefas, setTarefas } = useContext(TransactionContext);

 

  return (

    <div className="flex-container">
     
        {tarefas.map((tarefa, index) => (
          <div className="div-tarefas" 
          key={index}
          >
            {tarefa.name}{tarefa.description}
          </div>
        ))}  
    </div>
  )
}
