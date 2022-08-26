import MainComponents from "./components/MainComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/stylesheet/styles.css";
import "./assets/stylesheet/custom.css";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainComponents />
    </BrowserRouter>
  );
}

export default App;
