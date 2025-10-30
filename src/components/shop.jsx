import NavBar from "./navbar";
import styles from "../styles/shoppage.module.css"
import { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

function Shop(props){ 
  const [open, setOpen] = useState(false); 
  const [item, setItem] = useState([]);

  const handleOpen= (item) => {
    setOpen(true); 
    setItem(item)
  }

  const handleClose = () => {setOpen(false)}

  return (
    <>
      <NavBar />

      <div className={styles.shopContainer}>
        <p className={styles.title}>Shop Items</p>
        <div className={styles.gridContainer}>
          {props.data.map(item => (
            <div className={styles.gridItem} key={item.id} onClick={() => handleOpen(item)}>
              <p className={styles.itemName}>{item.title}</p>
              <p className={styles.category}>Category: {item.category}</p>
              <p className={styles.price}>${item.price}</p>
              <img src={item.image} className={styles.image}></img>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className={styles.modalTitle}>{item.title}</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>{item.description}</p>
          </Typography>
        </Box>

        <Button variant="contained">Contained</Button>
      </Modal>

      
    </>
  );
}

export default Shop