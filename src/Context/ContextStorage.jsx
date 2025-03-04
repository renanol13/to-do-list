import { createContext, useEffect, useReducer, useState } from "react";

const initialState = JSON.parse(localStorage.getItem("@dataStorage")) || null;
const Reduce = (state, action) => {
  switch (action.type) {
    case "ADD-TASK":
      return {
        ...state,
      };
  }
};


export const ContextStorage = createContext();

export const StorageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  useEffect(() => {
    localStorage.setItem("@dataStorage", JSON.stringify(state));
  }, [state]);

  return (
    <ContextStorage.Provider value={{ state, dispatch }}>
      {children}
    </ContextStorage.Provider>
  );
};
