import Header from "../compoents/Header";
import Card from "../compoents/Card";
import TodoContainer from "../compoents/TodoContainer";
import { useLocation } from "react-router-dom";



function Landing() {
    const location = useLocation();
    const username = location.state?.user || "Guest";
    console.log(username);
  return (
    <div className="bg-black p-7">
    <div className="bg-[#EFEFEF] p-7 border rounded-md">
      <Header name = {username}/>
      {/*flex box*/}
      <div className="flex justify-between gap-2 my-5 flex-wrap">
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
        <Card bgcolor={"#FD6663"} title={"February 16"} subtitle={"11.07.43"}/>
        <Card bgcolor={"#FCA201"} title={"Built"} subtitle={"Using react"} />
      </div>
      <TodoContainer/>
    </div>
  </div>
  );
}

export default Landing;