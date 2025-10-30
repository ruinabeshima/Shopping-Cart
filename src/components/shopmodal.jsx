import styles from "../styles/shoppage.module.css"
import { useState } from "react";
import { Modal, Box, Typography, Button, IconButton, TextField } from "@mui/material";

function ShopModal(props){
  const [quantity, setQuantity] = useState(1);

  return (
    <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className={styles.modalTitle}>{props.item.title}</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>{props.item.description}</p>
          </Typography>

          <Box className={styles.toggle}>

            <Typography>
              <p className={styles.toggletitle}>Set Quantity: </p>
            </Typography>
            

            <input type="number" className={styles.quantity}/>

            <button className={styles.add}>
              Add To Cart
            </button>
        </Box>
        </Box>

    </Modal>
  );
}

export default ShopModal