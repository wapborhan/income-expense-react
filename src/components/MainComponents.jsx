import React, { Fragment, Component } from "react";
import Sidebar from "./Sidebar";
import HeadNav from "./HeadNav";
import Body from "./Body";
import Footer from "./pages/footer/Footer";

export default class MainComponents extends Component {
  render() {
    return (
      <Fragment>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <HeadNav />
              <div className="container-fluid topbarpt">
                <Body />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}
