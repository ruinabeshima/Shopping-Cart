import styles from "../styles/navbar.module.css"
import icon from "../assets/icon.svg"

function NavBar(props){
  return (
    <div className={styles.navbar}>
      <div className={styles.imgContainer}>
        <img src={icon} className={styles.img} onClick={(event) => props.handlePage(0, event)}></img>
      </div>

      <div className={styles.linkContainer}>
        <a className={styles.link} onClick={(event) => props.handlePage(1, event)}>Shop</a>
        <a className={styles.link} onClick={(event) => props.handlePage(2, event)}>Cart</a>
        <p className={styles.button}>1</p>
      </div>
    </div>
  );
}

export default NavBar