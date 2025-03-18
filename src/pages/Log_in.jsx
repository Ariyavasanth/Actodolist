import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Log_in(props) {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁 Toggle password visibility
  const [ruser, setRuser] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  var userFound = false;

  const users = props.users;

  function checkUser() {
    console.log(users);
    if (!inputUsername.trim() || !inputPassword.trim()) {
      setError("⚠️ All fields are required!");
      return;
    }
    users.forEach((item) => {
      if (item.username === inputUsername && item.password === inputPassword) {
        console.log("User found");
        userFound = true;
        setError(""); // Clear errors

        navigate("/landing", { state: { username: inputUsername } });
      }
    });

    if (!userFound) {
      console.log("User not found");
      setRuser(false);
      setError("❌ Incorrect username or password!");
    }
  }

  function handleUserInput(evt) {
    setInputUsername(evt.target.value);
    setError("");
  }

  function handlePasswordInput(evt) {
    setInputPassword(evt.target.value);
    setError("");
  }

  return (
    <div className="bg-black p-10 h-screen flex justify-center items-center md:w-[100%] md:h-[50%] md:block md:p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Heading */}
        <div>
          <h1 className="text-2xl font-semibold">Hey Hi 👋</h1>
          {ruser ? (
            <p>I help you to manage your account</p>
          ) : (
            <p className="text-red-600 font-semibold">
              I help you manage your activities after you sign in :)
            </p>
          )}
          {error && <p className="text-red-600 font-semibold">{error}</p>}
        </div>

        {/* Form */}
        <div className="mt-5 flex flex-col gap-3">
          {/* Username Input */}
          <div className="flex items-center justify-between border border-black rounded-md p-1 w-[fit-content]">
            <input
              type="text"
              onChange={handleUserInput}
              placeholder="Username"
              className="w-52 p-1 bg-transparent border  focus:outline-none border-none border-black rounded-md"
            />
          </div>

          {/* Password Input with Show/Hide Toggle */}
          <div className="flex items-center justify-between border border-black rounded-md p-1 w-[fit-content]">
            <input
              type={showPassword ? "text" : "password"} // Toggle input type
              onChange={handlePasswordInput}
              placeholder="Password"
              className="w-52 p-1 bg-transparent border-none outline-none"
            />

            {/* 👁 Eye Icon to Toggle Password Visibility */}
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <svg
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
                </svg>
              ) : (
                <svg
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
                </svg>
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={checkUser}
            className="bg-[#8272DA] w-52 text-white p-2 rounded-md mt-5"
          >
            Log in
          </button>
        </div>

        {/* Signup Link */}
        <p className="mt-5">
          Don't have an account?{" "}
          <Link to="/signin" className="underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Log_in;
