import {useState} from "react"
import AddTodoform from "../compoents/AddTodoform.jsx";
import ToDoList from "../compoents/ToDoList.jsx";

function TodoContainer() {
  const [activityArr,setactivity] = useState([
    {
        id:1,
        activity:"Go for a mile"
    },
    {
        id:2,
        activity:"Have a Breakfast"
    },
    {
        id:3,
        activity:"Take a shower"
    }

  ])
  return (
    <div>
        {/*flex -box*/}
      <div className="flex flex-wrap gap-2">
        <AddTodoform activityArr = {activityArr} setactivity = {setactivity}/>
        <ToDoList activityArr = {activityArr} setactivity = {setactivity}/>
      </div>
      
    </div>
  );
}

export default TodoContainer;
