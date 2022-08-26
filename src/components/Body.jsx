import React, { Fragment, Component } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Income from "./pages/income/Income";
import Expense from "./pages/expense/Expense";
// Data
import DATA from "../assets/data/data";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
    };
  }

  render() {
    return (
      <Fragment>
        <Dashboard alldata={this.state.data} />
        <div className="row">
          <div className="col-md-6 ">
            <Income data={this.state.data.incomeDetails} />
          </div>

          <div className="col-md-6">
            <Expense data={this.state.data.expenseDetails} />
          </div>
        </div>
      </Fragment>
    );
  }
}
