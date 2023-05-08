import React from 'react';
import AddUser from './components/Users/AddUser';
import UserFinder from './components/Users/UserFinder';
import UserProvider from './store/UserProvider';

function App() {
  return (
    <UserProvider>
      <AddUser />
      <UserFinder />
    </UserProvider>
  );
}

export default App;
