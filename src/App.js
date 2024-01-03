import Header from "./Components/Header";
import MainCoontainer from "./Components/MainCoontainer";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MainCoontainer />
      </div>
    </Provider>
  );
}

export default App;
