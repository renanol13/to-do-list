import { useContext, useEffect, useRef, useState } from "react";
import styles from "./FormPopUp.module.css";

import { IoSend } from "react-icons/io5";
import { ContextStorage } from "../Context/ContextStorage";

const FormPopUp = ({ onclose, dataEdition }) => {
  const [data, setData] = useState({
    dateTask: new Date().toISOString().split("T")[0],
    timeTask: new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  } || dataEdition);
  const [error, setError] = useState(true);
  const { dispatch } = useContext(ContextStorage);

  //verificar se data está correta
  const isValidatedTime = (dateParsed, hoursParsed) => {
    const timeNow = new Date();
    //Divide a string e retorna apenas a parte que contem a data
    const dateNow = timeNow.toISOString().split("T")[0];
    const hoursNow = timeNow.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    if ((dateParsed < dateNow) | (hoursParsed <= hoursNow)) {
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

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    setError(null);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (data.textTask && data.category && data.dateTask) {
      if (!isValidatedTime(data.dateTask, data.timeTask)) {
        setError("Data ou Hora inválida!");
        return;
      }
      dispatch({ type: "ADD-TASK", payload: data });
      onclose();
      return;
    }
    setError("Preencha todos os campos!");
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
          {error && <p className={styles.error}>{error}</p>}
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
              value={data?.dateTask}
            />

            <input
              type="time"
              name="timeTask"
              id="timeTask"
              onChange={handleChange}
              value={data?.timeTask}
            />
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
