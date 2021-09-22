import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "../../actions/getAction";
import "./Card.css";
const Card = ({ currence }) => {
  const dispatch = useDispatch();
  const [connect, setconnect] = useState(true);

  const Bdata = useSelector((state) => state.gets.items);

  useEffect(() => {
    dispatch(fetchposts(connect));
  }, [dispatch, connect]);

  const bb = Bdata.map((item, index) => {
    return <div key={index}>{item}</div>;
  });

  return (
    <div>
      {bb.length === 0 ? (
        <div
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "sans-serif",
            height: "120px",
          }}
        >
          Loading...
        </div>
      ) : (
        <ul className="CardContainer">
          <div className="image">&#8383;</div>
          <div className="flex">
            <div className="left">
              <li>{currence}</li>
              <li>
                <span style={{ color: "#C0C0C0", textAlign: "center" }}>
                  VOL
                </span>{" "}
                {(bb[7].props.children * 10000)
                  .toFixed()
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                <span
                  style={{
                    color: "#C0C0C0",
                    textDecoration: "underline",
                    textAlign: "center",
                  }}
                >
                  BTC
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                <span style={{ color: "	#C0C0C0" }}>LOW</span>{" "}
                {bb[9].props.children
                  .toFixed(1)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </li>
            </div>
            <div className="right">
              <li>
                {bb[6].props.children
                  .toFixed(1)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </li>
              <li
                style={{
                  color: "yellowgreen",
                }}
              >
                {((bb[8].props.children - bb[9].props.children) % 100).toFixed(
                  2
                )}
                <span>
                  {" "}
                  {Math.abs(
                    ((bb[8].props.children - bb[9].props.children) /
                      bb[9].props.children) *
                      100
                  ).toFixed(2) > 0 ? (
                    <span>&#9650;</span>
                  ) : (
                    <span>&#9660;</span>
                  )}
                </span>
                <span>
                  {" "}
                  {Math.abs(
                    ((bb[8].props.children - bb[9].props.children) /
                      bb[9].props.children) *
                      100
                  ).toFixed(2)}
                </span>
              </li>
              <li>
                <span style={{ color: "#C0C0C0" }}>HIGH </span>
                {bb[8].props.children
                  .toFixed()
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </li>
            </div>
          </div>
        </ul>
      )}
      <div className="buttons">
        <button
          onClick={() => {
            setconnect(true);
            window.location.reload();
          }}
        >
          Connect
        </button>
        <button onClick={() => setconnect(false)}>Disconnect</button>
      </div>
    </div>
  );
};

export default Card;
