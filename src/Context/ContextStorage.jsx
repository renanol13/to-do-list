import { createContext, useEffect, useReducer, useState } from "react";

let tasksObject = JSON.parse(localStorage.getItem("dataStorage")) || [];

const initialState = {
  tasks: tasksObject,
};

const Reduce = (state, action) => {
  switch (action.type) {
    case "ADD-TASK":
      const createId = crypto.randomUUID();
      action.payload.id = createId
      
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    
    default:
      return state;
  }
};

export const ContextStorage = createContext();

export const StorageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  useEffect(() => {
    // localStorage.setItem("@dataStorage", JSON.stringify(state));
  }, [state]);

  return (
    <ContextStorage.Provider value={{ state, dispatch }}>
      {children}
    </ContextStorage.Provider>
  );
};
