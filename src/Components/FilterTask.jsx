import { useState } from "react";
import styles from "./FilterTask.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdCategory } from "react-icons/md";

const FilterTask = () => {
  const [activeMenuFilter, setActiveMenuFilter] = useState(false);

  return (
    <div className={styles.boxFilter}>
      <div className={styles.boxTitle}>
        <h2>Lista de Tarefas</h2>
        <button onClick={() => setActiveMenuFilter(!activeMenuFilter)}>
          <IoMdArrowDropdown
            className={activeMenuFilter && styles.transitionFilterOn}
          />
        </button>
      </div>
      {activeMenuFilter && (
        <ul>
          <li> Todas</li>
          <li> Concluídas</li>
          <li> Pendentes</li>
          <li>
            <MdCategory />
            Trabalho
          </li>
          <li>
            <MdCategory />
            Pessoal
          </li>
          <li>
            <MdCategory />
            Lista de Desejos
          </li>
        </ul>
      )}
    </div>
  );
};

export default FilterTask;
