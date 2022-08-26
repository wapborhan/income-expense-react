import React from "react";

const Dashboard = (props) => {
  // Pick Data
  var income = props.alldata.incomeDetails;
  var expense = props.alldata.expenseDetails;
  // Data Length on Bangla
  var inclen = income.length.toLocaleString("bn-BD");
  var explen = expense.length.toLocaleString("bn-BD");

  //Sum Income
  var sumIncome = income
    .map((incdt) => incdt.iamm)
    .reduce((acc, amount) => acc + amount);
  //Sum Expense
  var sumexpense = expense
    .map((incdt) => incdt.eamm)
    .reduce((acc, amount) => acc + amount);
  // Remaining Amount
  var remamount = sumIncome - sumexpense;
  console.log(remamount);
  document.title = "SR Book";
  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-2 mb-md-0">
            <div className="py-3 px-5 shadow bg-primary text-white rounded">
              <h2 className="title">আয় - ({inclen})</h2>
              <p className="amount">
                ৳ <span id="prebalance">{sumIncome.toFixed(2)}</span>
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-2 mb-md-0">
            <div className="py-3 px-5 shadow bg-danger text-white rounded">
              <h2 className="title">ব্যয় - ({explen})</h2>
              <p className="amount">
                ৳ <span id="total-expense">{sumexpense.toFixed(2)}</span>
              </p>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="py-3 px-5 shadow bg-info text-white rounded">
              <h2 className="title">অবশিষ্ট</h2>
              <p className="amount">
                ৳ <span id="balance">{remamount.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
