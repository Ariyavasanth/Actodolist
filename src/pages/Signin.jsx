import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin(props) {
  const [inputUsername, setUsername] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");  // 🔴 Error message state
  const navigate = useNavigate();

  const users = props.users;
  const setUsers = props.setUsers;

  function registerUser() {
    // ✅ Check for empty fields
    if (!inputUsername.trim() || !inputPassword.trim() || !confirmPassword.trim()) {
      setError("⚠️ All fields are required!");
      return;  // ❌ Prevents navigation
    }

    // ✅ Check if passwords match
    if (inputPassword !== confirmPassword) {
      setError("❌ Passwords do not match!");
      return;  // ❌ Prevents navigation
    }

    // ✅ If everything is correct, add user and navigate
    setUsers([...users, { username: inputUsername, password: inputPassword }]);
    console.log(users);

    setError("");  // Clear errors
    navigate("/login");  // ✅ Now navigate only when valid
  }

  return (
    <div className="bg-black p-10 h-screen flex justify-center items-center md:w-[100%] md:h-[50%] md:block md:p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Heading */}
        <div>
          <h1 className="text-2xl font-semibold">Hey Hi 👋</h1>
          <p>I help you manage your activities after you Sign in :)</p>
        </div>

        {/* 🔴 Show error message */}
        {error && <p className="text-red-600 font-semibold">{error}</p>}

        {/* Form */}
        <div className="mt-5 flex flex-col gap-3">
          <input type="text" onChange={(e) => {setUsername(e.target.value); setError("");}} placeholder = "Username" className="w-52 p-1 bg-transparent border border-black rounded-md"/>
          
          
            
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-52 p-1 bg-transparent border border-black rounded-md"
          />
          <input
            type="password"
            onChange={(e) => {setConfirmPassword(e.target.value); setError("");}}
            placeholder="Confirm Password"
            className="w-52 p-1 border border-black rounded-md"
          />

          {/* Button */}
          <button
            onClick={registerUser}
            className="bg-[#FFC83D] w-52 text-white p-2 rounded-md mt-5"
          >
            Sign in
          </button>
        </div>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
