import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expenses.title}
        amount={props.expenses.amount}
        date={props.expenses.date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
