//eslint-disable-next-line
import React from "react";
import Card from "../Card/Card";
import "./Select.css";

const Select = () => {
  const currence = "BTC/USD";
  /*   const [a, set] = useState([]);
  console.log(a);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      mode: "no-cors",
      Accept: "application/json",
      "User-Agent": "ReadMe-API-Explorer",
    };
    fetch("https://api-pub.bitfinex.com/v2/tickers?symbols=ALL", requestOptions)
      .then((response) => response.text())
      .then((result) => set(result))
      .catch((error) => console.log("error", error));
  }, []); */

  return (
    <div className="main">
      <div>
        <Card currence={currence} />
      </div>
    </div>
  );
};

export default Select;
