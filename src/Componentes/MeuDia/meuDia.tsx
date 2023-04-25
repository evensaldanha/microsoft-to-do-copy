import { Button } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { TransactionContext } from "../../TransactionContext";
import "./style.css";
import { useContext, useState } from "react";
import Tarefa from "./TarefaAdc";
import { Task } from "../../types/task";
import Concluidas from "../Concluidas";

export default function Meudia() {
  const [newTask, setNewTask] = useState<Task>({
    title: "",
    description: "",
    completed: false,
    isFavorite: false,
  });
  
  const { tasks, setTasks } = useContext(TransactionContext);
  // const data = new Date();
  // const dia = String(data.getDate()).padStart(2, "0");
  // const mes = String(data.getMonth() + 1).padStart(2, "0");
  // const ano =data.getFullYear()
  // const dataDoDia = `${dia}/${mes}/${ano}`

  const date = new Date();
  const time = date.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [completedClick, setCompletedClick] = useState(false);

    return(
    <div>
      <div className="div-master"
      style={{marginLeft: "24px", marginRight: "24px",width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "row"}}>
          <ListItemText>
            <h2 className="meu-dia">Meu dia</h2>
            <div className="time">{time}</div>
            <hr></hr>
          </ListItemText>
        </div>

        <label>
          <TextField
            placeholder="Titulo da Tarefa"
            variant="filled"
            type="text"
            required
            className="title"
            value={newTask.title}
            onChange={(event) => {
              setNewTask?.((currentTask) => ({
                ...currentTask,
                title: event.target.value,
              }))}}
          />
        </label>
        <div>
          <label>
            <TextField
              style={{ width: "100%" }}
              required
              variant="filled"
              placeholder="Descrição da tarefa"
              type="text"
              value={newTask.description}
              onChange={(event) => {
                setNewTask?.((currentNewTask) => ({
                  ...currentNewTask,
                  description: event.target.value,
                }));
              }}
            />
            <Button
            className="botao2"
              disabled={newTask.title === "" || newTask.description === ""}
              size="small"
              variant="outlined"
              onClick={ (e) => {
                setTasks?.((currentTask) => [
                  ...currentTask,
                  { ...newTask }
                ]);

                setNewTask({
                  title: "",
                  description: "",
                  isFavorite: false,
                  completed: false,
                })
              }
            }
            >
              Adicionar
            </Button>
          </label>
        </div>
        {tasks
          .map((tarefa, index) => {
            return {
              tarefa: tarefa,
              selectOnChange: (event: any) => {
                const _tarefas = [...tasks];
                _tarefas[index].completed = event.target.checked;
                setTasks?.(_tarefas);
              },
              isFavoriteOnChange: (event: any) => {
                const _tarefas = [...tasks];
                _tarefas[index].isFavorite = event.target.checked;
                setTasks?.(_tarefas);
              },
            };
          })
          .filter(({ tarefa }) => {
            if (tarefa.completed === true) {
              return false;
            } else {
              return true;
            }
          })
          .map(({ tarefa, selectOnChange, isFavoriteOnChange }, index) => {
            return (
              <div>
              <Tarefa
                key={index}
                title={tarefa.title}
                description={tarefa.description}
                completed={tarefa.completed}
                selectOnChange={selectOnChange}
                isFavorite={tarefa.isFavorite}
                isFavoriteOnChange={isFavoriteOnChange}
                index={index}
              />
              </div>
            );
          })}
      </div>
      <div>
        <Button
        style={{marginLeft: "24px", marginRight: "24px"  }}
          onClick={() => setCompletedClick((Completo) => !Completo)}
        >
          Concluidas
        </Button>
        {completedClick && <Concluidas />}
      </div>
</div>
)
}
