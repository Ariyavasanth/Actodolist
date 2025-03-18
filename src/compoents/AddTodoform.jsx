import { useState } from "react";

function AddTodoform(props) {
    const activityArr = props.activityArr
    const setactivity = props.setactivity

    const [newactivity,setNewactivity] = useState(" ")
    
    function handleChange(evt){
      setNewactivity(evt.target.value)
    }

    function addActivity()
    {
      setactivity([...activityArr,{id:activityArr.length+1,activity:newactivity}])
      setNewactivity("")
    }
  return (
    <>
      <div className="flex flex-col gap-2">
        {/*Flex item 1*/}
        <h1 className="text-2xl font-medium">Manage activity</h1>

        {/*Flex item 2*/}
        <div className="flex gap-2 flex-wrap">
          <input className="border rounded bg-transparent border-black p-1" onChange = {handleChange} value = {newactivity} type="text" placeholder="Add activity"></input>
          <button className="bg-black text-white py-1 px-3  border rounded" onClick = {addActivity}> Add </button>
        </div>
        
      </div>
    </>
  );
}

export default AddTodoform;
