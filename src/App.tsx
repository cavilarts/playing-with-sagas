import "./App.css";
import Albums from "./components/Albums";
import { configureStore } from "./api/stores/main-store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={configureStore}>
      <Albums />
    </Provider>
  );
}

export default App;
