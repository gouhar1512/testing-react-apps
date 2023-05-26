import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <hr />
      <UserList users={users} />
    </div>
  );
};

export default App;
