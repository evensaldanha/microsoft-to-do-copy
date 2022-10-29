import { Button } from "@mui/material";
import { useState } from "react"
import DetalheDoPrazo from "./DeTalheDoPrazo"

export default function Prazo() {
  const [showDeadline, setShowDeadline] = useState(false);

  return (
    <div className="prazos">
      <Button onClick={() => setShowDeadline((oldShowDeadline) => !oldShowDeadline)}>Prazos</Button>

      {
        showDeadline && (
          <DetalheDoPrazo />
        )
      }
    </div>
  )
}
