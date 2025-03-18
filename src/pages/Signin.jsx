import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin(props) {
  const [inputUsername, setUsername] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = props.users;
  const setUsers = props.setUsers;

  function registerUser() {
    if (!inputUsername.trim() || !inputPassword.trim() || !confirmPassword.trim()) {
      setError("⚠️ All fields are required!");
      return;
    }
    
    if (inputPassword !== confirmPassword) {
      setError("❌ Passwords do not match!");
      return;
    }

    setUsers([...users, { username: inputUsername, password: inputPassword }]);
    console.log(users);

    setError("");
    navigate("/login");
  }

  return (
    <div className="bg-black p-10 h-screen flex justify-center items-center md:w-[100%] md:h-[50%] md:block md:p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <div>
          <h1 className="text-2xl font-semibold">Hey Hi 👋</h1>
          <p>I help you manage your activities after you Sign in :)</p>
        </div>

        {error && <p className="text-red-600 font-semibold">{error}</p>}

        <div className="mt-5 flex flex-col gap-3">
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            placeholder="Username"
            className="w-52 p-1 bg-transparent outline-none border border-black rounded-md"
          />

          <div className="flex items-center border border-black rounded-md p-1 w-[fit-content]">
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-52 p-1 bg-transparent outline-none"
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  {/* 👁 Eye Open (Password Visible) */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg> : <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  {/* 👁‍🗨 Eye Closed (Password Hidden) */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3l18 18M10.5 10.5a3 3 0 1 0 3 3m-3-3l3 3"
                  />
                </svg>}
            </button>
          </div>

          <div className="flex items-center border border-black rounded-md p-1 w-[fit-content]">
            <input
              type={showConfirmPassword ? "text" : "password"}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
              }}
              placeholder="Confirm Password"
              className="w-52 p-1 bg-transparent outline-none"
            />
            <button onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  {/* 👁 Eye Open (Password Visible) */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg> : <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  {/* 👁‍🗨 Eye Closed (Password Hidden) */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3l18 18M10.5 10.5a3 3 0 1 0 3 3m-3-3l3 3"
                  />
                </svg>}
            </button>
          </div>

          <button
            onClick={registerUser}
            className="bg-[#FFC83D] w-52 text-white p-2 rounded-md mt-5"
          >
            Sign in
          </button>
        </div>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
