import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Cards";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.item.title}
        amount={props.item.amount}
        date={props.item.date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
