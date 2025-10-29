import NavBar from "./navbar";
import styles from "../styles/shoppage.module.css"

function Shop(props){
  return (
    <>
      <NavBar />
      <div className={styles.shopContainer}>
        <p className={styles.title}>Shop Items</p>
        <div className={styles.gridContainer}>
          {props.data.map(item => (
            <div className={styles.gridItem} key={item.id}>
              <p className={styles.itemName}>{item.title}</p>
              <p>${item.price}</p>
              <img src={item.image} className={styles.image}></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop