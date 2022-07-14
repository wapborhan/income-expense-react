import React, { Fragment } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";

const MainComponents = () => {
  return (
    <Fragment>
      <Header />
      <Dashboard />
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-6 ">
              <div class="border p-3 shadow">
                <h2>আয় এর বিবরণ</h2>
                <div class="form mb-3">
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        class="mb-2"
                        id="income-detail"
                        type="text"
                        placeholder="আয়ের বিবরণ"
                        required
                      />
                    </div>
                    <div class="col-md-3">
                      <input
                        class="mb-2"
                        id="incamount"
                        type="number"
                        placeholder="পরিমান"
                        required
                      />
                    </div>
                    <div class="col-md-3">
                      <button
                        class="btn btn-primary"
                        id="income-btn"
                        onclick="income();"
                        data-bs-toggle="modal"
                        data-bs-target="#incomemodal"
                      >
                        আপডেট{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <table class="table table-bordered table-hover">
                  <thead class="thead-dark text-center">
                    <tr>
                      <th scope="col">তারিখ</th>
                      <th scope="col">বিবরণী</th>
                      <th scope="col">পরিমান</th>
                    </tr>
                  </thead>
                  <tbody id="income-list"></tbody>
                </table>
              </div>
            </div>

            <div class="col-md-6">
              <div class="border p-3 shadow">
                <h2>ব্যয় এর বিবরণ</h2>
                <div class="form mb-3">
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        class="mb-2"
                        id="ex-detail"
                        type="text"
                        placeholder="ব্যায়ের বিবরণ"
                        required
                      />
                    </div>
                    <div class="col-md-3">
                      <input
                        class="mb-2"
                        id="ex-amount"
                        type="number"
                        placeholder="পরিমান"
                        required
                      />
                    </div>
                    <div class="col-md-3">
                      <button
                        class="btn btn-danger"
                        id="income-btn"
                        onclick="expense()"
                        data-bs-toggle="modal"
                        data-bs-target="#exmodal"
                      >
                        আপডেট{" "}
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- For JavaScript List --> */}
                <table class="table table-bordered table-hover">
                  <thead class="thead-dark text-center">
                    <tr>
                      <th scope="col">তারিখ</th>
                      <th scope="col">বিবরণী</th>
                      <th scope="col">পরিমান</th>
                    </tr>
                  </thead>
                  <tbody id="expense-list"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default MainComponents;
