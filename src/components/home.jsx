import styles from "../styles/homepage.module.css"
import NavBar from "./navbar";

function Home(props){
  return (
    <>
      <NavBar quantity={props.quantity}/>
    </>
  ); 
}

export default Home

