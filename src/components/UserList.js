import React from "react";

const UserList = ({ users }) => {
  const renderedUsers = users.map((users) => {
    return (
      <tr key={users.name}>
        <td>{users.name}</td>
        <td>{users.email}</td>
      </tr>
    );
  });
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid="users">{renderedUsers}</tbody>
    </table>
  );
};

export default UserList;
