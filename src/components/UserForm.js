import React, { useState } from 'react';

const UserForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Name</label>
        <input value={name} onChange={nameChangeHandler} />
      </div>
      <div>
        <label>Email</label>
        <input value={email} onChange={emailChangeHandler} />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
