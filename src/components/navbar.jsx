import styles from "../styles/navbar.module.css"

function NavBar(){
  return (
    <div className={styles.navbar}>
      <a className={styles.link}>Home</a>
      <a className={styles.link}>Shop</a>
      <a className={styles.link}>Cart</a>
      <p>1</p>
    </div>
  );
}

export default NavBar