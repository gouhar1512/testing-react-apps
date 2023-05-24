import React, { useState } from 'react'
import UserForm from './components/UserForm'

const App = () => {
  
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers([...users, user]);
  }

  return (
    <div>
      <UserForm onAddUser={addUserHandler}/>
    </div>
  )
}

export default App