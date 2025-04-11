import styles from "./TaskCard.module.css";
import { gsap } from "gsap";
import { FaCheck } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import TaskCardFunctions from "./TaskCardFunctions";
import { ContextStorage } from "../Context/ContextStorage";

const TaskCard = ({
  id,
  textTask,
  hours,
  date,
  category,
  isComplete,
  opFilter,
  onEdit,
}) => {
  const boxTaskRef = useRef(null);
  const boxIconCompleteTaskRef = useRef(null);
  const [activeFunctionsCard, setActiveFunctionsCard] = useState(false);
  const tl = gsap.timeline();
  const { dispatch } = useContext(ContextStorage);

  const EffectComplete = () => {
    tl.to(boxIconCompleteTaskRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "elastic",
    });
  };

  const handleClick = (e) => {
    e.stopPropagation();

    // Se não estiver completa, animar para o estado de completa
    if (!isComplete) {
      EffectComplete();
      // O efeito de rolagem só irá aparecer se estiver na aba de tarefas pendentes
      if (opFilter == "pending") {
        tl.to(boxTaskRef.current, {
          opacity: 0,
          x: -500,
          duration: 1,
          onComplete: () => {
            boxTaskRef.current.style.display = "none";
            dispatch({ type: "COMPLETE-TASK", payload: { id } });
          },
        });
        return;
      }

      // Se já estiver completa, animar de volta para o estado inicial
    } else {
      tl.to(boxIconCompleteTaskRef.current, {
        scale: 0,
        opacity: 0,
      });
    }
    dispatch({ type: "COMPLETE-TASK", payload: { id } });
  };

  // Verifica se a tarefa está completa e seta o estado de verificação
  useEffect(() => {
    if (isComplete) {
      EffectComplete();
    }
  }, []);

  return (
    <div
      ref={boxTaskRef}
      className={styles.boxTaskCard}
      onClick={() => setActiveFunctionsCard(!activeFunctionsCard)}
    >
      {activeFunctionsCard ? (
        <TaskCardFunctions id={id} onEdit={onEdit} />
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
