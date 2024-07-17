import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
// import videos from "../../data/db.json"
import styles from './index.module.css';
import { useEffect, useState } from "react";
import Categoria from "../../components/Categoria";

function Inicio() {
    const categorias = [
        {
            titulo: "Front End",
            color: "#6BD1FF"
        },
        {
            titulo: "Back End",
            color: "#00C86F"
        },
        {
            titulo: "Innovación y Gestión",
            color: "#FFBA05"
        } 
    ]

    return (
        <>

            <Banner img="home" color="#0012d84e" />{
                categorias.map( (categoria) => <Categoria datos={categoria} key={categoria.titulo} /> )
            }
            




        </>
    )
}

export default Inicio;