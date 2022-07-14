import React from "react";

const ExpenseList = (props) => {
  return (
    <div className="border p-3 shadow">
      <h2>ব্যয় এর বিবরণ</h2>
      <div className="form mb-3">
        <div className="row">
          <div className="col-md-6">
            <input
              className="mb-2"
              id="ex-detail"
              type="text"
              placeholder="ব্যায়ের বিবরণ"
              required
            />
          </div>
          <div className="col-md-3">
            <input
              className="mb-2"
              id="ex-amount"
              type="number"
              placeholder="পরিমান"
              required
            />
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-danger"
              id="income-btn"
              data-bs-toggle="modal"
              data-bs-target="#exmodal"
            >
              আপডেট{" "}
            </button>
          </div>
        </div>
      </div>
      {/* <!-- For JavaScript List --> */}
      <table className="table table-bordered table-hover">
        <thead className="thead-dark text-center">
          <tr>
            <th scope="col">তারিখ</th>
            <th scope="col">বিবরণী</th>
            <th scope="col">পরিমান</th>
          </tr>
        </thead>
        <tbody id="expense-list">
          {props.data.map((expense) => {
            return (
              <tr key={Math.random()}>
                <td>{expense.edate}</td>
                <td>{expense.edesc}</td>
                <td>{expense.eamm}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
