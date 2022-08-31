import '../Style/stiloDeTarefas.css';
import Card from '@mui/material/Card';
import { CardActionArea, CardHeader } from '@mui/material';
import CardContent from '@mui/material/CardContent';



export default function Tarefas() {
  return (
    <div className="flex-container">
      <Card>
        <CardActionArea>
          <CardHeader
            title='A fazer'
            subheader="Urgente"> </CardHeader>
          <CardContent>
            Tarefa 1
            Tarefa 2
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className='em-andamento '>
        <CardActionArea>
          <CardHeader
            title='Em andamento'> </CardHeader>
          <CardContent>
            Tarefa 1
            Tarefa 2
          </CardContent>

        </CardActionArea>
      </Card>
      <Card className='concluidas'>
        <CardActionArea>
          <CardHeader

            title='Concluidas'> </CardHeader>
          <CardContent>
            Tarefa 1
            Tarefa 2
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className='metas'>
        <CardActionArea>
          <CardHeader
            title='Metas'> </CardHeader>
          <CardContent>
            Tarefa 1
            Tarefa 2
          </CardContent>
        </CardActionArea>
      </Card>

    </div>
  )
}
