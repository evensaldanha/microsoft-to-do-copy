import { Link } from "react-router-dom";
import "./listaDoMenu.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import AddTaskIcon from '@mui/icons-material/AddTask';
import GradeIcon from '@mui/icons-material/Grade';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from "react";
import { Button } from "@mui/material";



export default function ListaDoMenu() {
  const [visivel, setVisivel] = useState("")
  

  return (
    <div className="lista-do-menu">
      <Button variant="contained" onClick= {(e) => setVisivel(visivelAtual => !visivelAtual) }>Menu</Button>
      
      <div className={visivel ? "" : "invisible"}>
       <div className="lista-dos-itens">
        <HomeIcon></HomeIcon>
        <Link to="/home">Home</Link>
      
        <AccessAlarmIcon > </AccessAlarmIcon>
        <Link to="/prazos">Prazo</Link>
      
        <AddTaskIcon></AddTaskIcon>
        <Link to="/tarefas">Tarefas</Link>
      
        <AcUnitIcon></AcUnitIcon>
        <Link to="/meuDia">Meu Dia</Link>
      
        <GradeIcon></GradeIcon>
        <Link to="/importante">Importante</Link>
      
        <PersonAddIcon></PersonAddIcon>
        <Link to="/atribuidoamim">Atribuido a mim</Link>
      </div>
      </div>
    </div>
  )
}
