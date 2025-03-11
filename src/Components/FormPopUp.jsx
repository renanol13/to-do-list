import { useEffect, useRef, useState } from "react";
import styles from "./FormPopUp.module.css";

import { FaShareAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const FormPopUp = ({ onclose }) => {
  //verificar se data está correta
  const isValidatedDate = (dateParsed) => {
    const dateNow = new Date().toISOString().split("T")[0];
    if (dateParsed < dateNow) {
      return false;
    }
    return true;
  };

  const boxInputRef = useRef(null);
  useEffect(() => {
    if (boxInputRef) {
      boxInputRef.current.focus();
    }
  }, []);

  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (data.textTask && data.category && data.dateTask) {
      if (!isValidatedDate(data.dateTask)) {
        alert("Data inválida");
        return;
      }
      onclose();
      return;
    }
    alert("Preencha todos os campos");
  };

  return (
    <div className={styles.boxFormPopUp} onClick={() => onclose()}>
      <div className={styles.boxForm} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleClick}>
          <label htmlFor="textTask"></label>
          <textarea
            id="textTask"
            ref={boxInputRef}
            name="textTask"
            placeholder="Insira uma nova tarefa aqui"
            value={data.textTask || ""}
            onChange={handleChange}
          ></textarea>
          <div className={styles.boxMoreOptions}>
            <label htmlFor="category"></label>
            <select
              name="category"
              id="category"
              onChange={handleChange}
              value={data.category || ""}
            >
              <option value="" disabled>
                Sem categoria
              </option>
              <option value="trabalho">Trabalho</option>
              <option value="pessoal">Pessoal</option>
              <option value="listaDeDesejos">Lista de Desejos</option>
            </select>
            <label htmlFor="dateTask"></label>
            <input
              type="date"
              name="dateTask"
              id="dateTask"
              onChange={handleChange}
              value={data.dateTask || ""}
            />
            <FaShareAlt />
            <button>
              <IoSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPopUp;
