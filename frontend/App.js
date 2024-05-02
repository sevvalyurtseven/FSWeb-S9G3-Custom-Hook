import React, { useEffect } from "react";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { useGeceModu } from "./components/hooks/useGeceModu";
import { useAxios } from "./components/hooks/useAxios";

const App = () => {
  //const [coinData, setCoinData] = useState([]);
  //const [geceModu, setGeceModu] = useState(false);
  const [geceModu, setGeceModu] = useGeceModu("geceModu", false);

  const [coinData, error, loading, getData] = useAxios(
    "get",
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
  );

  useEffect(() => {
    getData();
    /* axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err)); */
  }, []);
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      {loading ? <h1>Loading...</h1> : <Charts coinData={coinData} />}
    </div>
  );
};

export default App;
