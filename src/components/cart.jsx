import NavBar from "./navbar";
import styles from "../styles/cartpage.module.css";

function Cart(props){
  return (
    <>
      <NavBar quantity={props.quantity}/>
      <div className={styles.cartContainer}>
        <p className={styles.title}>Cart Page</p>
        <div className={styles.itemContainer}>
          {props.quantity === 0 ? (
            <p>No items added yet!</p>
          ) : (
            props.cart.map((cartItem) => (
              <div className={styles.cartItem}>
                <p>{cartItem.item.title}</p>
                <p>{cartItem.quantity}</p>
                <p>${cartItem.item.price * cartItem.quantity}</p>
              </div>
            ))
          )}
        </div>
      </div>
      
    </>
  );
}

export default Cart