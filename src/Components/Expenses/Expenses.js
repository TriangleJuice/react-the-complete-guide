import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filter, setFilter] = useState(2021);

  const changeFilterHandler = (year) => {
    setFilter(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter.toString();
  });

  return (
    <div className="expenses">
      <ExpensesFilter year={filter} onFilterChanged={changeFilterHandler} />
      <Card>
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
