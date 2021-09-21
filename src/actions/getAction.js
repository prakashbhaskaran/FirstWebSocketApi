import { GET_POSTS, GET_SINGLE_POST } from "./types";

export const fetchposts = (currency, connect) => (dispatch) => {
  const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  let msg = JSON.stringify({
    event: "subscribe",
    channel: "ticker",
    symbol: currency,
  });
  if (connect) {
    ws.onopen = () => {
      ws.send(msg);
    };

    ws.onmessage = (event) => {
      const res = JSON.parse(event.data);
      if (typeof res[1] === "object") {
        dispatch({
          type: GET_POSTS,
          payload: res[1],
        });
      } else {
        return null;
      }
    };
  } else if (!connect || ws.url !== "") {
    return ws.close();
  }
};

export const fetchitem = (id) => (dispatch) => {
  fetch("url", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: GET_SINGLE_POST,
        payload: data,
      })
    );
};
