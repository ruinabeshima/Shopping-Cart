import styles from "../styles/shoppage.module.css"
import { Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShopModal(props){
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (event) => {
    setQuantity(event.target.value)
  }

  const handleAddToCart = (event) => {
    event.preventDefault()
    props.handleQuantity()
    props.addCart(props.item, quantity)
    navigate('/cart')
  }

  return (
    <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.modalTitle}>
            {props.item.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.item.description}
          </Typography>

          <Box className={styles.toggle}>

            <Typography className={styles.toggletitle}>
              Set Quantity: 
            </Typography>
            

            <input type="number" className={styles.quantity} min="1" onChange={handleQuantity} value={quantity}/>

            <button className={styles.add} onClick={handleAddToCart}>
              Add To Cart
            </button>
        </Box>
        </Box>

    </Modal>
  );
}

export default ShopModal