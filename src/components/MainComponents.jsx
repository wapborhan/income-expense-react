import React, { Fragment, Component } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Income from "./pages/income/Income";
import Expense from "./pages/expense/Expense";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";

// Data
import DATA from "../assets/data/data.js";

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
        <Header />
        <Dashboard alldata={this.state.data} />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <Income data={this.state.data.incomeDetails} />
              </div>

              <div className="col-md-6">
                <Expense data={this.state.data.expenseDetails} />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}
