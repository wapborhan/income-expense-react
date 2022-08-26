import MainComponents from "./components/MainComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/stylesheet/styles.css";
import "./assets/stylesheet/custom.css";
import Demo from "./components/pages/demo/Demo";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <MainComponents />
    </Fragment>
  );
}

export default App;
