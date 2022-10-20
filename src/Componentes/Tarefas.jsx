import '../Style/stiloDeTarefas.css';
import Card from '@mui/material/Card';
import { CardActionArea, CardHeader } from '@mui/material';
import CardContent from '@mui/material/CardContent';



export default function Tarefas() {
  return (
    <div className="flex-container">
      <Card className='card'>
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
        <CardActionArea>
          <CardHeader
            title='Concluidas'> </CardHeader>
          <CardContent>
          <div>Tarefa 1</div>
          <div>Tarefa 2</div>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className='card'>
        <CardActionArea>
          <CardHeader
            title='Metas'> </CardHeader>
          <CardContent>
          <div>Tarefa 1</div>
          <div>Tarefa 2</div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
