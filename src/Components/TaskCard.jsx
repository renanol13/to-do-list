import styles from "./TaskCard.module.css";
import { gsap } from "gsap";
import { FaCheck } from "react-icons/fa";
import { useLayoutEffect, useRef, useState } from "react";

const TaskCard = () => {
  const boxTaskRef = useRef(null);
  const boxIconCompleteTaskRef = useRef(null);
  const [activeCompleteTask, setActiveCompleteTask] = useState(false);
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    if (activeCompleteTask) {
      tl.to(boxIconCompleteTaskRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic",
      }).to(boxTaskRef.current, {
        opacity: 0,
        x: -400,
        duration: 0.7,
        onComplete: () => {
          boxTaskRef.current.style.display = "none";
        },
      });
    }
    return () =>
      gsap.killTweensOf(boxTaskRef.current, boxIconCompleteTaskRef.current);
  }, [activeCompleteTask]);

  return (
    <div ref={boxTaskRef} className={styles.boxTaskCard}>
      <div
        onClick={() => setActiveCompleteTask(!activeCompleteTask)}
        className={styles.boxIconCompleteTask}
      >
        <FaCheck ref={boxIconCompleteTaskRef} />
      </div>
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
