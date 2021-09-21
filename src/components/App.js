import { Provider } from "react-redux";
import store from "../store";

import Select from "./Select/Select";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Select />
      </div>
    </Provider>
  );
}

export default App;
