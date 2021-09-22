import { GET_POSTS } from "./types";
const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
export const fetchposts = (connect) => (dispatch) => {
  let msg = JSON.stringify({
    event: "subscribe",
    channel: "ticker",
    symbol: "BTCUSD",
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
