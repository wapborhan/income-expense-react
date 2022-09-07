import React from "react";

const IncomeList = (props) => {
  return (
    <div className="border p-3 shadow rounded">
      <h2>আয় এর বিবরণ</h2>

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
