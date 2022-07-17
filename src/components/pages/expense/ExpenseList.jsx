import React from "react";

const ExpenseList = (props) => {
  return (
    <div className="border p-3 shadow rounded">
      <h2>ব্যয় এর বিবরণ</h2>

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
