import Checkbox from '@mui/material/Checkbox';
import { Paper } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './styledaTarefaAdc.css'
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useState } from 'react';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface TarefaProps {
    name: string;
    description: string;
}

export default function Tarefa({ name, description }: TarefaProps) {
  return (
    <div className='container'>
        <Paper className='paper'>
        <div className='div-container'>
          <Checkbox/>
          {name}
          {description}
          <Checkbox  {...label} defaultChecked icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}/>
        </div>
        </Paper>
    </div>

  )
}
