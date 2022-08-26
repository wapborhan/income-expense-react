import MainComponents from "./components/MainComponents";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { FaBars, FaUserCircle } from "react-icons/fa";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <div className="sidebars bg-dark text-light">
          <Sidebar />
        </div>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav
              id="topbar"
              className="topbar navbar navbar-expand navbar-light bg-white  mb-4 static-top shadow d-flex justify-content-between px-4"
            >
              <div className="sidebars-button text-dark mr-auto">
                <FaBars />
              </div>

              <h2 id="nameTitle" className="text-center text-dark">
                আয় ব্যয় হিসাব
              </h2>
              <div className="account ">
                <FaUserCircle />
              </div>
            </nav>
            <MainComponents />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
