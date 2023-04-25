import { Paper, Checkbox, CheckboxProps } from "@mui/material";
import "./styledaTarefaAdc.css";
import Favorite from "@mui/icons-material/Favorite";
import { Task } from "../../types/task";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useState } from "react";
import { TransactionContext } from "../../TransactionContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
interface TarefaProps extends Task {
  selectOnChange: CheckboxProps["onChange"];
  isFavoriteOnChange: CheckboxProps["onChange"];
  index: number;
}

export default function Tarefa({
  title,
  description,
  completed,
  selectOnChange,
  isFavorite,
  isFavoriteOnChange,
  index,
}: TarefaProps) {
  const { tasks, setTasks } = useContext(TransactionContext);

  function removingTask() {
    const removingItem = [...tasks];
    removingItem.splice(index, 1);
    if (setTasks) {
      setTasks(removingItem);
    }
  }
  return (
    <div className={completed ? "line" : ""}>
                
      <Paper >
        <>
          <Checkbox onChange={selectOnChange} checked={completed} />
          {title}
          {description}
          <Checkbox
            {...label}
            checked={isFavorite}
            checkedIcon={<Favorite />}
            onChange={isFavoriteOnChange}
          />
          <Button onClick={removingTask}>
            <DeleteIcon />
          </Button>
        </>
      </Paper>
    </div>
  )
}
