import { Link } from "react-router-dom";
import "./listaDoMenu.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import HomeIcon from '@mui/icons-material/Home';
import AddTaskIcon from '@mui/icons-material/AddTask';
import GradeIcon from '@mui/icons-material/Grade';
import { useState } from "react";
import { Button } from "@mui/material";
import { Paper } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useContext as useContext } from "react";
import { TransactionContext } from "../TransactionContext";

export default function ListaDoMenu() {
  const [visivel, setVisivel] = useState("");
  const { tasks, setTasks } = useContext(TransactionContext);



  return (
    <div className="lista-do-menu" style={{border:"80px"}}>
        <Paper style={{ height: "43.5rem" }}>
      <button
        style={{
          margin: "16px 0 0 ", height: "48px", alignItems: "center", justifyContent: "space-between",
          backgroundColor: "#fff", color: "black", padding: "0 24px", display: "flex ", flexShrink: "0", border: "0px"
        }}
        sx={{ width: (theme) => theme.spacing(2) }}
        variant="contained" onClick={(e) => setVisivel(visivelAtual => !visivelAtual)}><MenuIcon style={{ borderRadius: "0px" }} /></button>

      <div className={visivel ? "" : "invisible"}>
          <div className="lista-dos-itens">
            {/* <Link style={{ textDecoration: "none" }} to="/home"  >
              <div className="item-container" >
                <HomeIcon style={{ height: "20px", width: "20px" }}></HomeIcon>
                <div style={{ color: "black", marginLeft: "16px" }}
                  className="link" >Home</div>
              </div>
            </Link> */}
            <Link style={{ textDecoration: "none" }} to="/meudia"  >
              <div className="item-container"  >
                <AcUnitIcon style={{ height: "20px", width: "20px"}} ></AcUnitIcon>
                <div style={{ color: "black", marginLeft: "16px" }}
                  className="link"> Meu dia</div>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}
              to="/favoritas"
            >
              <div className="item-container">
                <GradeIcon style={{ height: "20px", width: "20px"}}></GradeIcon>
                <div style={{ textDecoration: "none", color: 'black', marginLeft: "16px" }}
                  className="link" >Importante</div>
                  <div  style={{marginLeft:"129px"}}>
                  {tasks.filter(( tarefa ) => {
                   if (tarefa.isFavorite === true) {
                    return true;
                  }}).length}
                  
                </div>
                  
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }} to="/tarefas"
            >
             
            <Link
              style={{ textDecoration: "none" }} to="/planejado"
            >
              <div className="item-container">
                <AccessAlarmIcon style={{ height: "20px", width: "20px" }}> </AccessAlarmIcon>
                <div style={{ color: "black", marginLeft: "16px" }}
                  className="link" >Planejado</div>
              </div>
            </Link>
            <div className="item-container">
                <AddTaskIcon style={{ height: "20px", width: "20px" }}></AddTaskIcon>
                <div style={{ color: "black", marginLeft: "16px" }}
                  className="link" >Tarefas</div>
                  <div style={{marginLeft:"129px"}}>{tasks.length}</div>
              </div>
            </Link>
            <div style={{ color: "#e1dfdd", margin: "9px 16px", height: "1px" }}>_________________________________</div>
            <div>
              <p><Link to="/testando"
              >Testando</Link></p>
            </div>
          </div>
      </div>
      </Paper>

    </div>
  )
}
