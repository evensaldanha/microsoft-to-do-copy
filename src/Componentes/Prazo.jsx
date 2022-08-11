import { useState } from "react"
import DetalheDoPrazo from "./DeTalheDoPrazo"

export default function Prazo() {
  const [showDeadline, setShowDeadline] = useState(false);

  return (
    <div className="prazos">
      <h1 onClick={() => setShowDeadline((oldShowDeadline) => !oldShowDeadline)}>Prazos</h1>

      {
        showDeadline && (
          <DetalheDoPrazo />
        )
      }
    </div>
  )
}
