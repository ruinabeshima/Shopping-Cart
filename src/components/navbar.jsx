import styles from "../styles/navbar.module.css";
import icon from "../assets/icon.svg";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (

    <div className={styles.navbar}>
      <div className={styles.imgContainer}>
          <Link to="/">
                    <img
          src={icon}
          className={styles.img}
        ></img>
          </Link>
      </div>

      <div className={styles.linkContainer}>
        <Link className={styles.link} to="/shop">Shop</Link>
        <Link className={styles.link} to="/cart">Cart</Link>
        <p className={styles.button}>{props.quantity}</p>
      </div>
    </div>
  );
}

export default NavBar;
