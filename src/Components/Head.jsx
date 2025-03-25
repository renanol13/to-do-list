import styles from "./Head.module.css";
import { FiSearch } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";
import { useState } from "react";

const Header = ({ textSearch, setTextSearch }) => {
  const [activeGear, setActiveGear] = useState(false);
  return (
    <div className={styles.boxHeader}>
      <div className={styles.boxInput}>
        <FiSearch />
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          placeholder="Pesquise por sua task..."
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
      </div>
      <button onClick={() => setActiveGear(!activeGear)}>
        <FaGear className={`${activeGear && styles["activeGear"]}`} />
      </button>
    </div>
  );
};

export default Header;
