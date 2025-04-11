import styles from "./Conteiner.module.css";

const Conteiner = ({ children, popUps = false }) => {
    console.log(popUps);
    
  return (
    <div className={styles.boxConteiner}>
      {children}
    </div>
  );
};

export default Conteiner;
