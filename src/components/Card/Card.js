import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "../../actions/getAction";
import "./Card.css";
const Card = ({ currence }) => {
  const dispatch = useDispatch();
  const [connect, setconnect] = useState(true);

  const Bdata = useSelector((state) => state.gets.items);

  useEffect(() => {
    dispatch(fetchposts(currence, connect));
  }, [dispatch, currence, connect]);

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
          <div className="left">
            <li>{currence}</li>
            <li>
              <span style={{ color: "grey" }}>VOL</span>{" "}
              {(bb[7].props.children * 10000)
                .toFixed()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </li>
            <li
              style={{
                lineHeight: "initial",
                display: "flex",
                gap: "5px",
              }}
            >
              <span style={{ color: "grey" }}>LOW</span> {bb[9]}
            </li>
          </div>
          <div className="right">
            <li>{bb[6].props.children.toFixed(2)}</li>
            <li
              style={{
                color: "#00c921",
              }}
            >
              {Math.abs(
                (bb[8].props.children - bb[9].props.children) % 100
              ).toFixed(2)}
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
              <span style={{ color: "grey" }}>HIGH </span>
              {bb[8].props.children.toFixed(2)}
            </li>
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
