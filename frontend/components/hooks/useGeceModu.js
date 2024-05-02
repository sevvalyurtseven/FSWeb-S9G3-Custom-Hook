import { useState } from "react";

export const useGeceModu = (initialValue) => {
  const [geceModu, setGeceModu] = useState(initialValue);

  //geceModu state'i ve state'i değiştirme işlemlerini yapacak fonksiyon

  const changeValue = (value) => {
    setGeceModu(value);
  };
  return [geceModu, changeValue];
};
