import React from 'react';
import AddUser from './components/Users/AddUser';
import UserFinder from './components/Users/UserFinder';
import { useState } from 'react';
import ErrorBoundary from './components/ErrorHandling/ErrorBoundary';


function App() {
  const INITIAL_USERLIST = [{ username: 'Rohan', age: 25, id: 1 }];
  const [userList, setUserList] = useState(INITIAL_USERLIST);
  const addNewUser = (newUser) => {
    setUserList((prevUserList) => {
      return [...prevUserList, newUser];
    })
  }
  return (
    <>
      <AddUser addNewUser={addNewUser} />
      <ErrorBoundary>
        <UserFinder userList={userList} />
      </ErrorBoundary>
    </>
  );
}

export default App;
