import React, { Fragment } from "react";

const MainComponents = () => {
  return (
    <Fragment>
      <header class="bg-dark">
        <div class="container py-3">
          <h1 id="nameTitle" class="text-center text-white">
            আয় ব্যয় হিসাব
          </h1>
        </div>
      </header>
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
      <section>
        <div class="container">
          <div
            class="modal fade"
            id="incomemodal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modal-title">
                    {" "}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body text-center">
                  <h4 id="incMessage"></h4>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="exmodal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exp-title">
                    {" "}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body text-center">
                  <h4 id="expMessage"></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MainComponents;
