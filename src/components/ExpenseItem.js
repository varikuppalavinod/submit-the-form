import react, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"

function ExpenseItem(props) {
  const [price,setPrice]=useState(props.price)

  const changeexpense=()=>{
    setPrice("100")
    console.log(price)
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${price}</div>
        <button onClick={changeexpense}>changeprice</button>
      </div>
    </div>
  );
}

export default ExpenseItem;