import React, { Fragment, Component } from "react";
import ExpenseList from "./ExpenseList";

export default class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exdescval: "",
      exammval: "",
      isSubmitDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // triggered everytime value changes in our textboxes
  handleChange(event) {
    this.setState(
      {
        // use dynamic name value to set our state object property
        [event.target.name]: event.target.value,
      },
      function () {
        this.canSubmit();
      }
    );
  }

  canSubmit() {
    const { exdescval, exammval } = this.state;
    // TODO: add valid email format validation in this condition
    if (exdescval.length > 0 && exammval.length > 0) {
      this.setState({
        isSubmitDisabled: false,
      });
    } else {
      this.setState({
        isSubmitDisabled: true,
      });
    }
  }
  // triggered on submit
  handleSubmit = (event) => {
    // get our const values by destructuring state
    event.preventDefault();
    const { exdescval, exammval } = this.state;
    // regular javascript alert function
    alert(`Your registration detail: \n 
           Desc: ${exdescval} \n 
           Amount: ${exammval} \n
           `);
  };

  render() {
    return (
      <Fragment>
        <div className="border shadow rounded mb-3">
          <div className="form m-3">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    className="mb-2"
                    id="ex-detail"
                    type="text"
                    name="exdescval"
                    placeholder="ব্যায়ের বিবরণ"
                    value={this.state.exdescval}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="mb-2"
                    id="ex-amount"
                    type="number"
                    name="exammval"
                    placeholder="পরিমান"
                    value={this.state.exammval}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <button
                    className="btn btn-danger"
                    id="income-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exmodal"
                    disabled={this.state.isSubmitDisabled}
                  >
                    আপডেট{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ExpenseList data={this.props.data} />
      </Fragment>
    );
  }
}
