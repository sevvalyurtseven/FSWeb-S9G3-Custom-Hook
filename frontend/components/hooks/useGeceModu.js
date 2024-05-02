import { useLocalStorage } from "./useLocalStorage";

export const useGeceModu = (initialValue) => {
  const [geceModu, setGeceModu] = useLocalStorage("geceModu", initialValue);

  //geceModu state'i ve state'i değiştirme işlemlerini yapacak fonksiyon

  const changeValue = (value) => {
    setGeceModu(value);
  };
  return [geceModu, changeValue];
};
