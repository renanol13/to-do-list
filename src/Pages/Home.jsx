import styles from "./Home.module.css";

import { useContext, useState } from "react";
import Head from "../Components/Head";
import { ContextStorage } from "../Context/ContextStorage";
import FormPopUp from "../Components/FormPopUp";

const Home = () => {
  const { dataStorage } = useContext(ContextStorage);
  const [activeFormPopUp, setActiveFormPopUp] = useState(false);

  const handleActiveFormPopUp = () => {
    setActiveFormPopUp(!activeFormPopUp);
  };

  return (
    <div className={styles.boxHome}>
      {activeFormPopUp && <FormPopUp onclose={handleActiveFormPopUp} />}
      <Head />

      <div>
        <h2>Lista de Tarefas:</h2>
        {dataStorage ? (
          <div>tem itens</div>
        ) : (
          <p>aindao a tarefas a serem mostrads</p>
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
