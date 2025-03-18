import styles from "./TaskCardFunctions.module.css";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaShareAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
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

  return (
    <div className={styles.boxTaskCardFunctions} ref={activeBoxFunctions}>
      <button className={styles.share}>
        <FaShareAlt />
      </button>
      <button className={styles.edit}>
        <MdEdit />
        <p>Editar</p>
      </button>
      <button className={styles.del}>
        <RiDeleteBinFill />
        <p>Deletar</p>
      </button>
    </div>
  );
};

export default TaskCardFunctions;
