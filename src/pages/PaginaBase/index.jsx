import Cabecera from "../../components/Cabecera/Cabecera"
import Pie from "../../components/Pie"
import { Outlet } from "react-router-dom"
import styled from "./pBase.module.css"

function PaginaBase(){
    return(
        <main className={styled.main}>
            <Cabecera />
                <Outlet/>
            <Pie />
        </main>
    )
}

export default PaginaBase 