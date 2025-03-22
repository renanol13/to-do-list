import { createContext, useEffect, useReducer, useState } from "react";

let tasksObject = JSON.parse(localStorage.getItem("@dataStorage")) || [];

const initialState = {
  tasks: tasksObject,
};

const Reduce = (state, action) => {
  switch (action.type) {
    case "ADD-TASK":
      const newPayload = action.payload;

      const createId = crypto.randomUUID();
      newPayload.id = createId;
      newPayload.isComplete = false;

      return {
        ...state,
        tasks: [...state.tasks, newPayload],
      };
    case "COMPLETE-TASK":
      const newArray = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, isComplete: true } : task
      );
      console.log(newArray);

      return {
        ...state,
        tasks: newArray,
      };

    default:
      return state;
  }
};

export const ContextStorage = createContext();

export const StorageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  useEffect(() => {
    localStorage.setItem("@dataStorage", JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <ContextStorage.Provider value={{ state, dispatch }}>
      {children}
    </ContextStorage.Provider>
  );
};
