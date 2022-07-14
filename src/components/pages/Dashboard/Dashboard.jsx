import React from "react";

const Dashboard = () => {
  return (
    <section>
      <div class="container py-5">
        <div class="row">
          <div class="col-md-4 mb-2 mb-md-0">
            <div class="py-3 px-5 shadow bg-primary text-white rounded">
              <h2 class="title">আয়</h2>
              <p class="amount">
                ৳ <span id="prebalance">00.00</span>
              </p>
            </div>
          </div>
          <div class="col-md-4 mb-2 mb-md-0">
            <div class="py-3 px-5 shadow bg-danger text-white rounded">
              <h2 class="title">ব্যয়</h2>
              <p class="amount">
                ৳ <span id="total-expense">00.00</span>
              </p>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="py-3 px-5 shadow bg-info text-white rounded">
              <h2 class="title">অবশিষ্ট</h2>
              <p class="amount">
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
