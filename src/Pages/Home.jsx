import styles from "./Home.module.css";

import { useContext } from "react";
import Head from "../Components/Head";
import { ContextStorage } from "../Context/ContextStorage";

const Home = () => {
  const { dataStorage } = useContext(ContextStorage);
  console.log();

  return (
    <div className={styles.boxHome}>
      <Head />
      <div>
        <h2>Lista de Tarefas:</h2>
        {dataStorage ? (
          <div>tem itens</div>
        ) : (
          <p>aindao a tarefas a serem mostrads</p>
        )}
      </div>
      <button className={styles.addTask}>+</button>
    </div>
  );
};

export default Home;
