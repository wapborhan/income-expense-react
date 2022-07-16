import React, { Fragment } from "react";
import IncomeList from "./IncomeList";

const Income = (props) => {
  return (
    <Fragment>
      <div className="border shadow rounded mb-3">
        <div className="form m-3">
          <div className="row">
            <div className="col-md-6">
              <input
                className="mb-2"
                id="income-detail"
                type="text"
                placeholder="আয়ের বিবরণ"
                required
              />
            </div>
            <div className="col-md-3">
              <input
                className="mb-2"
                id="incamount"
                type="number"
                placeholder="পরিমান"
                required
              />
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-primary"
                id="income-btn"
                data-bs-toggle="modal"
                data-bs-target="#incomemodal"
              >
                আপডেট{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <IncomeList data={props.data} />
    </Fragment>
  );
};

export default Income;
