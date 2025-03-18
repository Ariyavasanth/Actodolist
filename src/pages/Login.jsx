import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(props) {
  const [inputusername, setinputUsername] = useState("");
  const [inputpassword, setinputPassword] = useState("");
  const [ruser, setRuser] = useState(true);
  const [error,setError] = useState("");
  const navigate = useNavigate();

  var userfound = false;

  const users = props.users;
  const setUsers = props.setUsers;

  function checkUser() {
    console.log(users);
    if(!inputusername.trim() || !inputpassword.trim()){
      setError("⚠️ All fields are required!");
      return;
    }
    users.forEach(function (item) {
      if (item.username === inputusername && item.password === inputpassword) {
        console.log("User found");
        userfound = true;
        setError("");  // Clear errors

        navigate("/landing", { state: { username: inputusername } });

      }
    });

    if (userfound === false) {
      console.log("User not found");
      setRuser(false);
      setError("");
    }
  }

  function handelUserinput(evt) {
    setinputUsername(evt.target.value);
    setError("");
  }

  function handleinputPassword(evt) {
    setinputPassword(evt.target.value);
    setError("");
  }

  return (
    <div className="bg-black p-10 h-screen flex justify-center items-center md:w-[100%] md:h-[50%] md:block md:p-16">
      <div className="bg-[#EFEFEF] p-5 border rounded-md">
        {/*heading*/}
        <div>
          <h1 className="text-2xl font-semibold">Hey Hi 👋</h1>
          {ruser?(<p>I help you to manage your account</p>):(<p className="text-red-600 font-semibold">I help you manage your activities after you login :)</p>)}
          {error && <p className = "text-red-600 font-semibold">{error}</p>}
        </div>

        {/*form*/}
        <div className="mt-5 flex flex-col gap-3">
          <input
            type="text"
            onChange={handelUserinput}
            placeholder="Username"
            className="w-52 p-1 bg-transparent border border-black rounded-md"
          />
          <input
            type="password"
            onChange={handleinputPassword}
            placeholder="Password"
            className="w-52 p-1 bg-transparent border border-black rounded-md "
          ></input>

          {/*button*/}
          <button
            onClick={checkUser}
            className="bg-[#8272DA] w-52 text-white p-2 rounded-md mt-5"
          >
            Log in
          </button>
        </div>

        <p className="mt-5">
          Don't have an account?{" "}
          <Link to="/signin" className="underline">
            Sig up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
