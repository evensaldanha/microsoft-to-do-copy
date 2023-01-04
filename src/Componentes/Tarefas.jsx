import "../Style/stiloDeTarefas.css";
// import Card from '@mui/material/Card';
// import { CardActionArea, CardHeader } from '@mui/material';
// import CardContent from '@mui/material/CardContent';
import { TransactionContext } from "../TransactionContext";
import { useContext } from "react";


export default function Tarefas() {

  const { tarefas, setTarefas } = useContext(TransactionContext);

  return (
    <div className="flex-container">

      {tarefas.map(( tarefa, index ) => (
      <div className='div-tarefas' key={index}>{tarefa.name}{tarefa.description}</div>
        ))}
      {/* <Card className='card'>
        <CardActionArea>
          <CardHeader
            title='A fazer'>
          </CardHeader>
          <CardContent>
            <div>Tarefa 1</div>
            <div>Tarefa 2</div>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className='card '>
        <CardActionArea>
          <CardHeader
            title='Em andamento'> </CardHeader>
          <CardContent>
            <div>Tarefa 1</div>
            <div>Tarefa 2</div>
          </CardContent>

        </CardActionArea>
      </Card>
      <Card className='card'>
        <CardHeader
          title='Concluidas'> </CardHeader>
        <CardContent>
          <div>Tarefa 1</div>
          <div>Tarefa 2</div>
        </CardContent>
      </Card> */}
    </div>

  )
}
