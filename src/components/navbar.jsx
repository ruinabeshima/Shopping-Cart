import styles from "../styles/navbar.module.css"
import icon from "../assets/icon.svg"

function NavBar(){
  return (
    <div className={styles.navbar}>
      <div className={styles.imgContainer}>
        <img src={icon} className={styles.img}></img>
      </div>

      <div className={styles.linkContainer}>
        <a className={styles.link}>Shop</a>
        <a className={styles.link}>Cart</a>
        <p className={styles.button}>1</p>
      </div>
    </div>
  );
}

export default NavBar