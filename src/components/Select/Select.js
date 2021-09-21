//eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Select.css";
import { cur } from "../Currency";
const Select = () => {
  const [currence, setCurrency] = useState("BTCUSD");
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

  const handleChange = (e) => {
    e.preventDefault();
    setCurrency(e.target.value);
  };

  return (
    <div className="main">
      <div className="selectcontainer">
        {" "}
        <select
          className="select"
          onChange={handleChange}
          defaultValue={currence}
        >
          {cur.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <Card currence={currence} />
      </div>
    </div>
  );
};

export default Select;
