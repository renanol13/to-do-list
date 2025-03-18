import styles from "./TaskCard.module.css";
import { gsap } from "gsap";
import { FaCheck } from "react-icons/fa";
import { useLayoutEffect, useRef, useState } from "react";
import TaskCardFunctions from "./TaskCardFunctions";

const TaskCard = () => {
  const boxTaskRef = useRef(null);
  const boxIconCompleteTaskRef = useRef(null);
  const [activeFunctionsCard, setActiveFunctionsCard] = useState(false);
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

  const openFunctionsCard = () => {
    if (!activeFunctionsCard) {
      setTimeout(() => setActiveFunctionsCard(true), 1000);
    }
  };

  return (
    <div
      ref={boxTaskRef}
      className={styles.boxTaskCard}
      onMouseDown={openFunctionsCard}
    >
      {activeFunctionsCard ? (
        <TaskCardFunctions />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default TaskCard;
