import { useLocalStorage } from "./useLocalStorage";

export const useGeceModu = (key, initialValue) => {
  const [geceModu, setGeceModu] = useLocalStorage(key, initialValue);

  //geceModu state'i ve state'i değiştirme işlemlerini yapacak fonksiyon

  const changeValue = (value) => {
    setGeceModu(value);
  };
  return [geceModu, changeValue];
};
