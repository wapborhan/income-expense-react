import React from "react";

const IncomeList = (props) => {
  return (
    <div className="border p-3 shadow">
      <h2>আয় এর বিবরণ</h2>
      <div className="form mb-3">
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
      <table className="table table-bordered table-hover">
        <thead className="thead-dark text-center">
          <tr>
            <th scope="col">তারিখ</th>
            <th scope="col">বিবরণী</th>
            <th scope="col">পরিমান</th>
          </tr>
        </thead>
        <tbody id="income-list">
          {props.data.map((income) => {
            return (
              <tr key={Math.random()}>
                <td>{income.idate}</td>
                <td>{income.idesc}</td>
                <td>{income.iamm}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeList;
