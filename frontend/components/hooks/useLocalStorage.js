import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    const value = JSON.parse(storedValue);
    const result = value ? value : initialValue;
    return result;
  });
  const changeValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, changeValue];
};
