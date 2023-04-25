import '../Style/detalheDoPrazo.css';
import { useEffect, useState } from "react"
import { Button } from '@mui/material';

export default function DetailPlanned() {
    const [tarefa, setTarefa] = useState([""])
    const [novaTarefa, setNovaTarefa] = useState("")

    // useEffect(() => {
    //     setTarefa(( ["Tarefa 1", "Tarefa 2"]))
    // },[] )

    function deletarTarefa(index) {
        const deletandoTarefa = [...tarefa];
        deletandoTarefa.splice(index, 1);
        setTarefa(deletandoTarefa);
    }

    return (
        <div className="container">
            <div className='todo'>
                <input value={novaTarefa}
                    required
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    type="text"
                >
                </input>
                <Button
                    required
                    disabled={novaTarefa === ""}
                    onClick={(e) => setTarefa(tarefa => [...tarefa, novaTarefa], setNovaTarefa(""))}
                >Adicionar
                </Button>
                <div className='todo-tarefas'>
                        {tarefa.map((item, index) =>
                        (
                            <div>
                                {item}
                                <button className='botao'
                                    onClick={(e) => deletarTarefa(index)}
                                >Deletar
                                </button>
                            </div>
                        )
                        )}
                </div>
            </div>
        </div>
    )
}