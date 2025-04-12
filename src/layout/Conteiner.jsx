import styles from "./Conteiner.module.css";

const Conteiner = ({ children}) => {
    
  return (
    <div className={styles.boxConteiner}>
      {children}
    </div>
  );
};

export default Conteiner;
