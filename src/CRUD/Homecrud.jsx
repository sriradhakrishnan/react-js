import style from "./homecrud.module.css"
import { Link } from "react-router-dom"
const Homecrud=()=>{
  return(
    <section id={style.nav}>
     <Link to="/comp1">create users</Link>
     <Link to="/comp2">users</Link>
    </section>
  )
}
export default Homecrud