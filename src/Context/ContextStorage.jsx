import { createContext, useEffect, useState } from "react";

export const ContextStorage = createContext();

export const StorageProvider = ({ children }) => {
  const [dataStorage, setDataStorage] = useState(null);

  useEffect(() => {
    const StorageData = localStorage.getItem("@dataStorage");
    if (StorageData) {
      setDataStorage(JSON.parse(StorageData));
    }
  }, []);
    

  return (
    <ContextStorage.Provider value={{ dataStorage }}>
      {children}
    </ContextStorage.Provider>
  );
};
