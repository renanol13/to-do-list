import { createContext, useEffect, useState } from "react";

export const ThemaContext = createContext();

export const ThemaProvider = ({ children }) => {
  const [thema, setThema] = useState(() => {
    const storageThema = localStorage.getItem("@themaStorage");
    return storageThema === "ligth" ? "dark" : "ligth";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (thema === "dark") {
      root.classList.add("darkThema");
    } else {
      root.classList.remove("darkThema");
    }
  }, [thema]);

  const toggleThema = () => {
    setThema(thema === "ligth" ? "dark" : "ligth");
    localStorage.setItem("@themaStorage", thema);
  };

  return (
    <ThemaContext.Provider value={{ thema, toggleThema }}>
      {children}
    </ThemaContext.Provider>
  );
};
