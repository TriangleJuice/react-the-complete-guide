import { useState } from 'react';

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormHandler = () => {
    setFormVisible(prevState => {
      return !prevState;
    });
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // Toggle form
    toggleFormHandler();

    // Lift state up
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!formVisible && <button type="button" onClick={toggleFormHandler}>Add new expense</button>}
      {formVisible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleFormHandler} />}
    </div>
  );
};

export default NewExpense;
