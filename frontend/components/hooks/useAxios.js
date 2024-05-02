import axios from "axios";
import { useState } from "react";

export const useAxios = (requestType, url, params) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios[requestType](url, params)
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return [data, error, loading, getData];
};
