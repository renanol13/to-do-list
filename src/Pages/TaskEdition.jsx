import { useContext, useState } from "react";
import styles from "./TaskEdition.module.css";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { IoAlertCircleSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { ContextStorage } from "../Context/ContextStorage";

const TaskEdition = ({ task, onClose }) => {
  const { dispatch } = useContext(ContextStorage);
  const [dataTask, setDataTask] = useState(task);

  const handleChange = (e) => {
    setDataTask({ ...dataTask, [e.target.name]: e.target.value });
  };

  const handleEditingData = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE-DATA", payload: dataTask });
    onClose();
  };

  return (
    <div className={styles.boxTaskEdition}>
      <form onSubmit={handleEditingData}>
        <select
          name="category"
          id="category"
          onChange={handleChange}
          value={dataTask.category}
          disabled={task.isComplete}
        >
          <option value="trabalho">Trabalho</option>
          <option value="pessoal">Pessoal</option>
          <option value="listaDeDesejos">Lista de Desejos</option>
        </select>
        <textarea
          id="textTask"
          name="textTask"
          placeholder="Idite sua tarefa..."
          value={dataTask.textTask}
          onChange={handleChange}
          disabled={task.isComplete}
        ></textarea>
        <div className={styles.boxEditingOptions}>
          <FaCalendarAlt />
          <p>Data de vencimento: </p>
          <input
            type="date"
            name="dateTask"
            onChange={handleChange}
            value={dataTask.dateTask}
            disabled={task.isComplete}
          />
        </div>
        <div className={styles.boxEditingOptions}>
          <FaClock />
          <p>Hora de vencimento: </p>
          <input
            type="time"
            name="timeTask"
            onChange={handleChange}
            value={dataTask.timeTask}
            disabled={task.isComplete}
          />
        </div>
        <div className={styles.boxEditingOptions}>
          {dataTask.isComplete ? (
            <>
              <FaCheckCircle className={styles.taskComplete} />
              <p>Completa</p>
            </>
          ) : (
            <>
              <GoAlertFill className={styles.taskIncomplete} />
              <p>Incompleta</p>
            </>
          )}
        </div>
        <button>Salvar</button>
      </form>
    </div>
  );
};

export default TaskEdition;
