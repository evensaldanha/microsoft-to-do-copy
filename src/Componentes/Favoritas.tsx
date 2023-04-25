import { useContext as useContext } from "react";
import { TransactionContext } from "../TransactionContext";
import "../Style/favoritas.css";
import GradeIcon from '@mui/icons-material/Grade';
import Paper from "@mui/material/Paper";

export default function Favorite() {
  const { tasks, setTasks } = useContext(TransactionContext);

  return (
    <div className="div-favoritas" style={{marginLeft: "24px", marginRight: "24px" }}>
      <div style={{display:"flex",flexDirection:"row", color:"#2564cf" }}>
      <GradeIcon ></GradeIcon>
      <h1 >Importante</h1>
      </div>
      {
        tasks
          .filter((tarefa) => {
            return tarefa.isFavorite;
          })
          .map(( tarefa, index ) => (
            <Paper className="div-do-map" key={index}>
              {tarefa.title} {tarefa.description}
            </Paper>
          ))
      }
    </div>
  )
}
