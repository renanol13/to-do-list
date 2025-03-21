import styles from "./TaskCard.module.css";
import { gsap } from "gsap";
import { FaCheck } from "react-icons/fa";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import TaskCardFunctions from "./TaskCardFunctions";

const TaskCard = ({
  id,
  textTask,
  hours,
  date,
  category,
  isComplete,
}) => {
  
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

  const handleClick = (e) => {
    e.stopPropagation();
    setActiveCompleteTask(!activeCompleteTask);
  };

  return (
    <div
      ref={boxTaskRef}
      className={styles.boxTaskCard}
      onClick={() => setActiveFunctionsCard(!activeFunctionsCard)}
    >
      {activeFunctionsCard ? (
        <TaskCardFunctions />
      ) : (
        <>
          <div
            onClick={(e) => handleClick(e)}
            className={styles.boxIconCompleteTask}
          >
            <FaCheck ref={boxIconCompleteTaskRef} />
          </div>
          <div className={styles.boxInfo}>
            <h4 className={styles.content}>{textTask}</h4>
            <div className={styles.boxTimes}>
              <p id="date">{date}</p>
              <p id="hours">{hours}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
