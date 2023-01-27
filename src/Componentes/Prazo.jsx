import { Button } from "@mui/material";
import { useState } from "react"
import DetalheDoPrazo from "./DeTalheDoPrazo"

export default function Prazo() {
  const [showDeadline, setShowDeadline] = useState(false);
  const [testando, setTestando] = useState(1)

  return (
    <div className="prazos">
      <Button onClick={() => setShowDeadline((oldShowDeadline) => !oldShowDeadline)}>Prazos</Button>

      {
        showDeadline && (
          <DetalheDoPrazo />
        )
      }

      <div>
        <button onClick={e => setTestando(clicou => clicou +1)}>Enviar</button>
        <div>{testando}</div>
      </div>
    </div>
  )
}
