import { useContext, useState } from "react";
import styles from "./HeadOptionsFunctions.module.css";

import { FaGear } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { FaSun  } from "react-icons/fa";
import { ThemaContext } from "../Context/ThemaContext";

const HeadOptionsFunctions = () => {
  const [activeGear, setActiveGear] = useState(false);
  const [optionThema, setOptionThema] = useState(false);
  const { thema, toggleThema } = useContext(ThemaContext);

  const activeConfig = () => {
    setActiveGear(!activeGear);
    setOptionThema(!optionThema);
  };

  return (
    <div className={styles.headOptionsFunctions}>
      <button onClick={() => activeConfig()}>
        <FaGear className={`${activeGear && styles["activeGear"]}`} />
      </button>
      {optionThema && (
        <ul>
          <li onClick={() => toggleThema()}>
            {thema === "dark" ? (
              <>
                <IoMoon />
                <p>Escuro</p>
              </>
            ) : (
              <>
                <FaSun  className={styles.butThemaLight} />
                <p className={styles.butThemaLight}>Claro</p>
              </>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default HeadOptionsFunctions;
