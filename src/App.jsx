import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Log_in from "./pages/Log_in.jsx";

import Signin from "./pages/Signin.jsx";

import Landing from "./pages/Landing.jsx";

function App() {
  const [users, setUsers] = useState([
    {
      username: "ariya",
      password: "123",
    },
  ]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Log_in users={users} setUsers={setUsers} />}
        ></Route>
        <Route
          path="/login"
          element={<Log_in users={users} setUsers={setUsers} />}
        ></Route>
        <Route
          path="/signin"
          element={<Signin users={users} setUsers={setUsers} />}
        ></Route>
        <Route path="/landing" element={<Landing />}></Route>
      </Routes>
    </>
  );
}

export default App;
