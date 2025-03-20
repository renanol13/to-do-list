import styles from "./TaskCardFunctions.module.css";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaShareAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const TaskCardFunctions = () => {
  const activeBoxFunctions = useRef(null);

  useLayoutEffect(() => {
    gsap.to(activeBoxFunctions.current, {
      opacity: 1,
      duration: 0.3,
      scale: 1,
    });
  }, []);
    
    
    const deleteTask = (e)=> {
        e.stopPropagation()
    }

    const openTask = (e) => {
        e.stopPropagation()
        
    }

  return (
    <div className={styles.boxTaskCardFunctions} ref={activeBoxFunctions}>
      <button className={styles.share}>
        <FaShareAlt />
      </button>
      <button className={styles.open} onClick={(e) => deleteTask(e)}>
        <FaEye />
        <p>Abrir</p>
      </button>
      <button className={styles.del} onClick={(e) => openTask(e)}>
        <RiDeleteBinFill />
        <p>Deletar</p>
      </button>
    </div>
  );
};

export default TaskCardFunctions;
