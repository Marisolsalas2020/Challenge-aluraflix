import { useState } from "react";
import styles from "./CampoTexto.module.css";

const CampoTexto = (props) => {
  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className={styles.campo}>
      <label>{props.titulo}</label>
      {props.tipo === "textarea" ? (
        <textarea
          placeholder={props.placeholder}
          value={props.valor}
          onChange={manejarCambio}
          required={props.required}
        />
      ) : (
        <input
          type="text"
          placeholder={props.placeholder}
          value={props.valor}
          onChange={manejarCambio}
          required={props.required}
        />
      )}
    </div>
  );
};

export default CampoTexto;