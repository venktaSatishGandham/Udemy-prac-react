import React from "react";
import "./index.css";
import ExpenseForm from "../ExpenseForm";
export default function NewExpense(props) {
  const saveExpenseDataHandler = (data) => {
    const addId = {
      ...data,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.addExpenseData(addId);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
