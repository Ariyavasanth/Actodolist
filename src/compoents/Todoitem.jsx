function Todoitem(props) {
  const activityArr = props.activityArr
  const setactivity = props.setactivity

  function handleDelete(deleteId){
    var tempArr = activityArr.filter(function(item){
      if(item.id === deleteId){
        return false
        
      }else{
        return true
      }
    })

    setactivity(tempArr)
  }
  
  return (
    <div className = "flex  justify-between items-center">
      <p>{props.index + 1}. {props.activity}</p>
      <button className = "text-red-500" onClick = {()=> handleDelete(props.id)}>Delete</button>
    </div>
  );
}

export default Todoitem;
