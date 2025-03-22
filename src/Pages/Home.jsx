import styles from "./Home.module.css";

import { useContext, useLayoutEffect, useState } from "react";
import Head from "../Components/Head";
import { ContextStorage } from "../Context/ContextStorage";
import FormPopUp from "../Components/FormPopUp";
import TaskCard from "../Components/TaskCard";
import FilterTask from "../Components/FilterTask";

const Home = () => {
  const { state } = useContext(ContextStorage);
  const [opFilter, setOpFilter] = useState("pending");
  const [activeFormPopUp, setActiveFormPopUp] = useState(false);

  const handleActiveFormPopUp = () => {
    setActiveFormPopUp(!activeFormPopUp);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [activeFormPopUp]);

  return (
    <div className={styles.boxHome}>
      {activeFormPopUp && <FormPopUp onclose={handleActiveFormPopUp} />}
      <Head />

      <div>
        <FilterTask opFilter={opFilter} setOpFilter={setOpFilter} />

        {state.tasks.length > 0 ? (
          state.tasks
            .filter((task) =>
              opFilter === "all"
                ? true
                : opFilter === "completed"
                ? task.isComplete
                : opFilter === "pending"
                ? !task.isComplete
                : opFilter === "work"
                ? task.category === "trabalho"
                : opFilter === "personal"
                ? task.category === "pessoal"
                :  task.category === "listaDeDesejos"
                
            )
            .map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                hours={task.timeTask}
                date={task.dateTask}
                category={task.category}
                textTask={task.textTask}
                isComplete={task.isComplete}
              />
            ))
        ) : (
          <p>ainda nao existe tarefas</p>
        )}
      </div>
      {!activeFormPopUp && (
        <button
          className={styles.addTask}
          onClick={() => handleActiveFormPopUp()}
        >
          +
        </button>
      )}
    </div>
  );
};

export default Home;
