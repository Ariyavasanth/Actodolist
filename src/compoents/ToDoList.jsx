
import Todoitem from "../compoents/Todoitem.jsx";


function ToDoList(props)
{    
    const activityArr = props.activityArr
    const setactivity = props.setactivity
    return(
        <>
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
          <h1 className="text-2xl font-medium">Today activity</h1>
          {activityArr.length===0?<p>The list is empty</p>:""}
          {
            activityArr.map(function(item,index){
                return <Todoitem id = {item.id} activity = {item.activity} index={index} activityArr = {activityArr} setactivity = {setactivity} />
            })
          }
        </div>

        </>
    )
}

export default ToDoList;