import React from "react";
import ExpenseList from "./ExpenseList";

const Expense = (props) => {
  return <ExpenseList data={props.data} />;
};

export default Expense;
