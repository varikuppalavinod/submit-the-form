import react,{useState} from "react"
import "./ExpenseForm.css"

function ExpenseForm(){

  const[enteredTitle,setEnteredTitle]=useState("")
  const[enteredAmount,setEnteredAmount]=useState("")
  const[enteredDate,setEnteredDate]=useState("")

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  }

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  }

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({enteredTitle,enteredAmount,enteredDate})

  }

    return (

<form onSubmit={handleSubmit}>
      <center>
          <div className="card">

            <label className="card-content">ExpenseTitle</label>
            <input type="text" value={enteredTitle}onChange={handleTitleChange}></input>

            <label className="card-content">ExpenseAmount</label>
            <input type="number" value={enteredAmount}onChange={handleAmountChange}></input>

            <label className="card-content">ExpenseDate</label>
            <input type="date" value={enteredDate}onChange={handleDateChange}></input><br/>
            <button type="submit">Addexpense</button>

          </div>
          </center>
          </form>
    )
}

export default ExpenseForm;