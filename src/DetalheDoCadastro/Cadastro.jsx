import { useState } from "react";
import DetalheDoCadastro from "./DetalheDoCadastro";
import './stiloDoCadastro.css';
import { Modal } from "@mui/material";
import Button from '@mui/material/Button';


export default function Cadastro(props) {
  const [clik, setClik] = useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="modal">
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div>
          <Button className="titulo-do-cadastro" onClick={() => setClik((clicou) => !clicou)}>Cadastro</Button>
          {
            clik && (
              <DetalheDoCadastro />
            )
          }
        </div>
      </Modal>
      <Button className='botao-do-modal' onClick={handleOpen}>Cadastrar</Button>
    </div>
  )
}
