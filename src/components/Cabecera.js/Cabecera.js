import {Link} from "react-router-dom"
import styles from "./Cabecera.css"
import logo from  "./logo.png"
import CabeceraLink from "../cabeceraLink/cabeceraLlink"

function Cabecera (){
    return (
        <header className={styles.cabecera}>
        <Link to="/">
            <section className={styles.logoContainer}>
                <img src={logo} alt="Logo Alura"/> 
            </section>
        </Link>
        <nav>
            <CabeceraLink url="./">
                <button className={styles.botonHome}>Home</button>
            </CabeceraLink>
            <CabeceraLink url="./favoritos">
               <button className={styles.nuevoVideo}>Nuevo Video</button>
            </CabeceraLink>
        </nav>
    </header>
    )
}
export default Cabecera