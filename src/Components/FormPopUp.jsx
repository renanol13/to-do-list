import { useEffect, useRef } from "react";
import styles from "./FormPopUp.module.css";

import { FaShareAlt } from "react-icons/fa";
import Conteiner from "../layout/Conteiner";

const FormPopUp = ({ onclose }) => {
  const boxInputRef = useRef(null);
  useEffect(() => {
    if (boxInputRef) {
      boxInputRef.current.focus();
    }
  }, []);

  return (
      <div className={styles.boxFormPopUp} onClick={() => onclose()}>
        <div className={styles.boxForm} onClick={(e) => e.stopPropagation()}>
          <label htmlFor="textTask"></label>
          <textarea
            id="textTask"
            ref={boxInputRef}
            name="textTask"
            placeholder="Insira uma nova tarefa aqui"
          ></textarea>
          <div className={styles.boxMoreOptions}>
            <label htmlFor="category"></label>
            <select name="category" id="category">
              <option value="" disabled>
                Sem categoria
              </option>
              <option value="trabalho">Trabalho</option>
              <option value="pessoal">Pessoal</option>
              <option value="listaDeDesejos">Lista de Desejos</option>
            </select>
            <label htmlFor="dateTask"></label>
            <input type="date" name="dateTask" id="dateTask" />
            <FaShareAlt />
          </div>
        </div>
      </div>
  );
};

export default FormPopUp;
