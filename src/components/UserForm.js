import React, { useState } from "react";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddUser({
      name,
      email,
    });
    setEmail("");
    setName("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={nameChangeHandler} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" value={email} onChange={emailChangeHandler} />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
