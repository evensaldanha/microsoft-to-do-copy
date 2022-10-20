import { Paper, Checkbox, CheckboxProps } from "@mui/material";
import './styledaTarefaAdc.css'
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useContext, useState } from "react";
import { TransactionContext } from "../../TransactionContext";
import Importante from "../Importante";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface TarefaProps { 
    name: string;
    description: string;
    select: boolean;
    onChange: CheckboxProps["onChange"];
    favorit: boolean;
}



export default function Tarefa({ name, description, select, onChange }: TarefaProps) {
  const { tarefas, setTarefas } = useContext(TransactionContext);
  const [ favorite, setFavorite] = useState (false)

  function fav(){
    setFavorite(!favorite)
  }
   return (
    <div className='container'>
      <Paper className='paper'>
              <> 
                <Checkbox onChange={onChange } checked= {select}/>
                  {name}
                  {description}
                <Checkbox 
                {...label} 
                  defaultChecked icon={<FavoriteBorder />}
                  checkedIcon={<Favorite/>}
                />
              </>
      </Paper>
    </div>
  )
}
