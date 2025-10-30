import NavBar from "./navbar";
import ShopModal from "./shopmodal";
import styles from "../styles/shoppage.module.css"
import { useState } from "react";

function Shop(props){ 
  const [open, setOpen] = useState(false); 
  const [item, setItem] = useState([]);

  const addToCart = (item, quantity) => {
    console.log(`Ordered ${quantity} of ${item}`)
  }

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

      {open && (
        <ShopModal open={open} item={item} handleClose={handleClose}/>
      )}

      
    </>
  );
}

export default Shop