import { Button } from "@mui/material";
import { useState } from "react"
import DetailPlanned from "./DeTalheDoPrazo";

export default function Planned() {
  const [showDeadline, setShowDeadline] = useState(false);

  return (
    <div className="prazos"
    style={{color:"2564cf",marginLeft: "24px", marginRight: "24px"  }}>
      <Button onClick={() => setShowDeadline((oldShowDeadline) => !oldShowDeadline)}>Planejado</Button>
      {
        showDeadline && (
          <DetailPlanned />
        )
      }
    </div>
  )
}
