import React, { Fragment, Component } from "react";
import { Routes, Route } from "react-router-dom";
//  Pages Import
import Sidebar from "./Sidebar";
import HeadNav from "./HeadNav";
import Footer from "./Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import Income from "./pages/income/Income";
import Expense from "./pages/expense/Expense";

import DATA from "../assets/data/data";
import NotFound from "./pages/notfound/NotFound";

export default class MainComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
    };
  }
  render() {
    return (
      <Fragment>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <HeadNav />
              <div className="container-fluid topbarpt">
                <Routes>
                  <Route
                    path="/"
                    element={<Dashboard alldata={this.state.data} />}
                  />
                  <Route
                    path="/income"
                    element={<Income data={this.state.data.incomeDetails} />}
                  />
                  <Route
                    path="/expense"
                    element={<Expense data={this.state.data.expenseDetails} />}
                  />
                  {/* <Route path="/about" element={<Invoices />} /> */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}
