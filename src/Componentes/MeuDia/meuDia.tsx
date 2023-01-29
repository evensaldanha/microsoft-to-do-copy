import { Button } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { TransactionContext } from "../../TransactionContext";
import "./style.css";
import { useContext, useState } from "react";
import Tarefa from "./TarefaAdc";
import { Task } from "../../types/task";
import Tarefas from "../Tarefas";
import Concluidas from "../Concluidas";


export default function Meudia() {
  const [newTask, setNewTask] = useState<Task>({
    name: "",
    description: "",
    completed: false,
    isFavorite: false
  });

  const { tarefas, setTarefas } = useContext(TransactionContext);
  // const data = new Date();
  // const dia = String(data.getDate()).padStart(2, "0");
  // const mes = String(data.getMonth() + 1).padStart(2, "0");
  // const ano =data.getFullYear()
  // const dataDoDia = `${dia}/${mes}/${ano}`

  const data = new Date();
  const opcoes = data.toLocaleDateString("pt-BR", {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });


  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >s
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>

          <ListItemText>
            <h2 className="meu-dia">Meu dia</h2>
            <div className="opcoes">{opcoes}</div>
          </ListItemText>
        </div>

        <label>
          <TextField
            style={{ width: "50%" }}
            placeholder="Nome"
            variant="filled"
            type="text"
            required
            value={newTask.name}
            onChange={(event) => {
              setNewTask?.((currentTask) => ({
                ...currentTask,
                name: event.target.value,
              }));
            }}
          />
        </label>

        <div>
          <label>
            <TextField
              style={{ width: "50%" }}
              required
              variant="filled"
              placeholder="Nova Tarefa"
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
              disabled={newTask.name === "" || newTask.description === ""}
              size="small"
              variant="outlined"
              onClick={(e) => 
                setTarefas?.((currentTarefas) => [
                  ...currentTarefas,
                  { ...newTask },
                ])
              }
            >
              Adicionar
            </Button>
          </label>
        </div>
        {tarefas
          .map((tarefa, index) => {
            return {
              tarefa: tarefa,
              selectOnChange: (event: any) => {
                const _tarefas = [...tarefas];

                _tarefas[index].completed = event.target.checked;
                setTarefas?.(_tarefas);
              },
              isFavoriteOnChange: (event: any) => {
                const _tarefas = [...tarefas];

                _tarefas[index].isFavorite = event.target.checked;
                setTarefas?.(_tarefas);
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
              <Tarefa
                key={index}
                name={tarefa.name}
                description={tarefa.description}
                completed={tarefa.completed}
                selectOnChange={selectOnChange}
                isFavorite={tarefa.isFavorite}
                isFavoriteOnChange={isFavoriteOnChange}
              />
            );
          })}
      </div>
      <div><Concluidas/></div>
    </Box>
  );
}
