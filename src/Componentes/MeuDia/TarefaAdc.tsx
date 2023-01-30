import { Paper, Checkbox, CheckboxProps } from "@mui/material";
import "./styledaTarefaAdc.css";
import Favorite from "@mui/icons-material/Favorite";
import { Task } from "../../types/task";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface TarefaProps extends Task {
  selectOnChange: CheckboxProps["onChange"];
  isFavoriteOnChange: CheckboxProps["onChange"];
}

export default function Tarefa({
  name,
  description,
  completed,
  selectOnChange,
  isFavorite,
  isFavoriteOnChange,
 
}: TarefaProps) {
  return (
    <div className="container">
      <Paper className="paper">
        <>
          <Checkbox
          onChange={selectOnChange} checked={completed}
        />
          {name}
          {description}
          <Checkbox
            {...label}
            checked={isFavorite}
            checkedIcon={<Favorite />}
            onChange= {isFavoriteOnChange}
          />
        </>
      </Paper>
    </div>
  );
}
