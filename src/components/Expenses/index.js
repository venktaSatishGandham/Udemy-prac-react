import React, { useState } from "react";
import "./index.css";
import ExpenseItems from "../ExpenseItems";
import ExpensesFilter from "../ExpensesFilter";

function Expenses(props) {
  const [year, setYear] = useState(2022);
  const updateYear = (yearValue) => {
    setYear(yearValue);
  };
  console.log(year);
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter updateYear={updateYear} />
        {props.expenses.map((each) => (
          <ExpenseItems
            id={each.id}
            title={each.title}
            amount={each.amount}
            date={each.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
