import React, { useState } from "react";
import "./index.css";

function ExpenseItems(props) {
  const { amount, date } = props;
  console.log("expense item");
  const [title, setTitle] = useState(props.title);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-us", { month: "long" });
  const day = date.toLocaleString("en-us", { day: "2-digit" });

  const clickHandler = () => {
    setTitle("satish");
    console.log("click button");
  };

  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
    </div>
  );
}

export default ExpenseItems;
