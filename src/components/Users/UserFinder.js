import { Fragment, useState, useEffect } from 'react';
import UserList from './UserList';
import classes from './UserFinder.module.css';

const UserFinder = (props) => {
  const userList = props.userList;
  const [filteredUsers, setFilteredUsers] = useState(props.userList);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      userList.filter((user) => user.username.includes(searchTerm))
    );
  }, [searchTerm, userList]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <label>Search User </label>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <UserList userList={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;