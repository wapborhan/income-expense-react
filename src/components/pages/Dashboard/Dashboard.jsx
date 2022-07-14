import React from "react";

const Dashboard = (props) => {
  // console.log(props.alldata);
  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-2 mb-md-0">
            <div className="py-3 px-5 shadow bg-primary text-white rounded">
              <h2 className="title">আয়</h2>
              {props.alldata.incomeDetails.map((indata) => {
                return console.log(indata);
              })}
              <p className="amount">
                ৳ <span id="prebalance">00.00</span>
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-2 mb-md-0">
            <div className="py-3 px-5 shadow bg-danger text-white rounded">
              <h2 className="title">ব্যয়</h2>
              {props.alldata.expenseDetails.map((exdata) => {
                return console.log(exdata);
              })}
              <p className="amount">
                ৳ <span id="total-expense">00.00</span>
              </p>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="py-3 px-5 shadow bg-info text-white rounded">
              <h2 className="title">অবশিষ্ট</h2>
              <p className="amount">
                ৳ <span id="balance">00.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
