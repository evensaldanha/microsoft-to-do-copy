import { Link } from "react-router-dom";
import "./listaDoMenu.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import AddTaskIcon from '@mui/icons-material/AddTask';
import GradeIcon from '@mui/icons-material/Grade';
import PersonAddIcon from '@mui/icons-material/PersonAdd';



export default function ListaDoMenu() {
  return (
    <div className="lista-do-menu">
      <AppsIcon></AppsIcon>
      <div>
      <HomeIcon></HomeIcon>
      <Link to="/home">Home</Link>
      </div>
      <div>
      <AccessAlarmIcon > </AccessAlarmIcon>
        <Link to="/prazos">Prazo</Link>
      </div>
      <div>
        <AddTaskIcon></AddTaskIcon>
        <Link to="/tarefas">Tarefas</Link>
      </div>
      <div>
      <AcUnitIcon></AcUnitIcon>
        <Link to="/meuDia">Meu Dia</Link>
      </div>
      <div>
        <GradeIcon></GradeIcon>
        <Link to="/importante">Importante</Link>
      </div>
      <div>
        <PersonAddIcon></PersonAddIcon>
        <Link to="/atribuidoamim">Atribuido a mim</Link>
      </div>
    </div>
  )
}
