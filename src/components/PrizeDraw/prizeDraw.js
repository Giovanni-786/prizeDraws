import { FaWhatsapp } from 'react-icons/fa';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './styles.css';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function PrizeDraw(draws){
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    

    return(
    <section className="container">  
         <Button onClick={handleOpen} style={{ color: 'black', fontSize: 'bold' }}>Criar Novo Sorteio</Button> <h2>Detalhes dos sorteios  🎉</h2>
                <div className="prizeDraw_container">
                <div className="prizeDraw_content">
                <div className="prizeDraw_infos_1">
                    <h3>Evento Benificiente</h3> 
                    <h3> <FaWhatsapp /> Conexão 11</h3>
                    <h3>Finalizado?</h3>
                 </div>
    
                 <div className="prizeDraw_infos_2">   
                    <h3>30 nov 2021</h3>
                </div>
                </div>
            </div>

    
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

    </section>
    )
}