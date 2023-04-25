import { useState } from "react"
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Testanto() {
    const [tarefa, setTarefa] = useState([""])
    const [novaTarefa, setNovaTarefa] = useState ("")

    return (
        <div>
            <h1>Valor do inpute no react</h1>
            <input type="text" 
            value={novaTarefa}
            onChange={(e)=> setNovaTarefa(e.target.value)}></input>
            <button 
            style={{margin:"10px", height:"15px", backgroundColor:"blue"}}
            onClick={(e)=> setTarefa(tarefa=> [...tarefa, novaTarefa], setNovaTarefa(""))}></button>
            {tarefa.map((item, index) =>
                 (
                 <div>{item}</div>   
                )
            )}
        </div>

    )
}