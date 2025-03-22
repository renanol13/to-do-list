import { useState } from "react";
import styles from "./FilterTask.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdCategory } from "react-icons/md";

const FilterTask = ({ opFilter, setOpFilter }) => {
  const [activeMenuFilter, setActiveMenuFilter] = useState(false);
  const [textH2, setTextH2] = useState("Pendentes");

  const optionsFilter = [
    { text: "Todas", opFilter: "all" },
    { text: "Concluídas", opFilter: "completed" },
    { text: "Pendentes", opFilter: "pending" },
    { text: "Trabalho", opFilter: "work", icon: <MdCategory /> },
    { text: "Pessoal", opFilter: "personal", icon: <MdCategory /> },
    { text: "Lista de Desejos", opFilter: "wishList", icon: <MdCategory /> },
  ];

  const handleClick = (option) => {
    setOpFilter(option.opFilter);
    setTextH2(option.text);
  };

  return (
    <div className={styles.boxFilter}>
      <div className={styles.boxTitle}>
        <button onClick={() => setActiveMenuFilter(!activeMenuFilter)}>
          {textH2}
          <IoMdArrowDropdown
            className={activeMenuFilter && styles.transitionFilterOn}
          />
        </button>
      </div>
      {activeMenuFilter && (
        <ul>
          {optionsFilter.map((option) => (
            <li
              onClick={() => handleClick(option)}
              className={opFilter === option.opFilter && styles.selected}
            >
              {option.icon && option.icon}
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterTask;
