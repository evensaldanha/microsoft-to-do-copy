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
        <Accordion className="card">
        <AccordionSummary className="div-tarefas"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>A fazer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Olá
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="card">
        <AccordionSummary className="div-tarefas"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Concluida</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Olá
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="card">
        <AccordionSummary className="div-tarefas"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Em andamento</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Olá
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className="div-tarefa">
        {tarefas.map((tarefa, index) => (
          <div className="div-tarefas" key={index}>{tarefa.name}{tarefa.description}</div>
          )).filter(({ tarefa }) => {
            if (tarefa.aFazer === true) {
              return false;
            } else {
              return true;
            }
          })
        }
      </div>
    </div>

  )
}
