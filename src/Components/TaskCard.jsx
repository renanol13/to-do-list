import styles from "./TaskCard.module.css";
import { SiGoogletasks } from "react-icons/si";
import { FaExclamation } from "react-icons/fa";

const TaskCard = () => {
  return (
    <div className={styles.boxTaskCard}>
          <FaExclamation className={styles.notComplete} />
      <div className={styles.boxInfo}>
        <h4 className={styles.content}>Isso é minha primeira tarefa</h4>
        <div className={styles.boxTimes}>
          <p id="date">12-11-2025</p>
          <p id="hours">12-45</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
