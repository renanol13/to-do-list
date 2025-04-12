import styles from "./TaskCardFunctions.module.css";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaShareAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useContext, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ContextStorage } from "../Context/ContextStorage";

const TaskCardFunctions = ({ onEdit, infoTask }) => {
  console.log(infoTask.id);

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
    dispatch({ type: "DELETE-TASK", payload: { id: infoTask.id } });
  };

  const openTask = (e) => {
    e.stopPropagation();
    onEdit();
  };

  const shareTask = (e) => {
    const configTask = `
  📌 Tarefa: ${infoTask.textTask}
  📅 Data: ${infoTask.date}
  ⏰ Hora: ${infoTask.hours}
  🏷️ Categoria: ${infoTask.category}
  ✅ Status: ${infoTask.isComplete ? "Finalizada ✅" : "Ainda pendente ⏳"}
      
  #MinhaAgenda #TaskShare
    `;
    e.stopPropagation();
    if (!navigator.share) {
      if (!navigator.clipboard) {
        alert("Essa função não está disponivel em seu dispositivo!");
        return;
      }

      // Caso a função de compartilhar não esteja disponivel
      navigator.clipboard
        .writeText(configTask)
        .then(() =>
          alert(
            "A função de compartilhar não é suportada nesse dispositivo!\nO texto foi copiado para a área de transferência."
          )
        )
        .catch(() => alert("Erro ao copiar texto para de tranferência."));
      return;
    }

    navigator
      .share({
        title: "Compatilhar tarefa",
        text: configTask,
      })
      .then(() => console.log("Compartilhado com sucesso"))
      .catch((err) => console.error("Erro ao compartilhar: ", err));
  };

  return (
    <div className={styles.boxTaskCardFunctions} ref={activeBoxFunctions}>
      <button className={styles.share} onClick={(e) => shareTask(e)}>
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
