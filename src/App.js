import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([{ name: "Max", age: "34" }]);
  const addUserHandler = (props) => {
    setUsersList((prev) => [...prev, props]);
  };
  return (
    <div>
      <AddUser addUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
