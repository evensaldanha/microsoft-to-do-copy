import { useState } from "react";
import DetalheDoCadastro from "./DetalheDoCadastro";

export default function Cadastro(props) {
  const [clik, setClik] = useState(false)

  return (
    <div >
      <h1 onClick={() => setClik((clicou) => !clicou)}>Cadastro</h1>
      {
        clik && (
          <DetalheDoCadastro />
        )
      }
    </div>
  )
}
