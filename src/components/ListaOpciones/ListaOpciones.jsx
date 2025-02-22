import styles from "./ListaOpciones.module.css"

const ListaOpciones = (props) => {

    const categorias = [
        "Front End",
        "Back End",
        "Innovación y Gestión"
    ]

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    return <div className={styles.listaOpciones}>
            <label>Categoria</label>
            <select value={props.valor} onChange={manejarCambio} > 
                <option value="" disabled defaultValue="" hidden>seleccione una categoría</option>
                {categorias.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)} 
            </select>
    </div>
}

export default ListaOpciones