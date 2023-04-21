import React from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState } from 'react';


function App() {
  const INITIAL_USERLIST = [{ username: 'Rohan', age: 25, id: 1 }];
  const [userList, setUserList] = useState(INITIAL_USERLIST);
  const addNewUser = (newUser) => {
    setUserList((prevUserList) => {
      return [...prevUserList, newUser];
    })
  }
  return (
    <div>
      <AddUser addNewUser={addNewUser} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
