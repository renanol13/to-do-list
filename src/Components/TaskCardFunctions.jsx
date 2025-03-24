import styles from "./TaskCardFunctions.module.css";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaShareAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useContext, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ContextStorage } from "../Context/ContextStorage";

const TaskCardFunctions = ({ id }) => {
  const activeBoxFunctions = useRef(null);
  const { dispatch } = useContext(ContextStorage);

  useLayoutEffect(() => {
    gsap.to(activeBoxFunctions.current, {
      opacity: 1,
      duration: 0.3,
      scale: 1,
    });
  }, []);

  const deleteTask = (e) => {
    e.stopPropagation();
    dispatch({ type: "DELETE-TASK", payload: { id: id } });
  };

  const openTask = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.boxTaskCardFunctions} ref={activeBoxFunctions}>
      <button className={styles.share}>
        <FaShareAlt />
      </button>
      <button className={styles.open} onClick={(e) => openTask(e)}>
        <FaEye />
        <p>Abrir</p>
      </button>
      <button className={styles.del} onClick={(e) => deleteTask(e)}>
        <RiDeleteBinFill />
        <p>Deletar</p>
      </button>
    </div>
  );
};

export default TaskCardFunctions;
