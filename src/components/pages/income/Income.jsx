import React, { Fragment, Component } from "react";
import IncomeList from "./IncomeList";

export default class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indescval: "",
      inammval: "",
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
    const { indescval, inammval } = this.state;
    // TODO: add valid email format validation in this condition
    if (indescval.length > 0 && inammval.length > 0) {
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
    const { indescval, inammval } = this.state;
    // regular javascript alert function
    alert(`Your type detail: \n 
           Desc: ${indescval} \n 
           Amount: ${inammval} \n
           `);
  };
  render() {
    document.title = "Income";
    return (
      <Fragment>
        <div className="border shadow rounded mb-3">
          <div className="form m-3">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    className="mb-2"
                    id="income-detail"
                    type="text"
                    placeholder="আয়ের বিবরণ"
                    name="indescval"
                    value={this.state.indescval}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="mb-2"
                    id="incamount"
                    type="number"
                    placeholder="পরিমান"
                    name="inammval"
                    value={this.state.inammval}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <button
                    className="btn btn-primary"
                    id="income-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#incomemodal"
                    disabled={this.state.isSubmitDisabled}
                  >
                    আপডেট{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <IncomeList data={this.props.data} />
      </Fragment>
    );
  }
}
