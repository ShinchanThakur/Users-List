import UserList from './UserList';
import classes from './UserFinder.module.css';
import { Component } from 'react';
import UserContext from '../../store/user-context';

class UserFinder extends Component {
  static contextType = UserContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
      userList: []
    }
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  };

  componentDidMount() {
    const { userList } = this.context;
    if (userList) {
      this.setState({ filteredUsers: userList, userList: userList });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { userList } = this.context;
    if (JSON.stringify(prevState.userList) !== JSON.stringify(userList) || prevState.searchTerm !== this.state.searchTerm) {
      //We are doing a shallow comparison here, use a proper comparison for such objects later
      this.setState({
        filteredUsers: userList.filter((user) => user.username.includes(this.state.searchTerm)),
        userList: userList
      })
    }
  }

  componentWillUnmount() {
    console.log(`5 use cases where componentWillUnmount can be used:

    To clear any pending requests made by the component using setTimeout, setInterval or XMLHttpRequests.
    To remove any event listeners added by the component to prevent memory leaks.
    To stop animations or transitions initiated by the component.
    To perform any cleanup activities like closing connections, files, or clearing any cached data.
    To cancel any subscriptions, especially in cases where the component is subscribed to external data sources like a WebSocket connection or a Redux store.`)
  }

  render() {
    return (
      <>
        <div className={classes.finder}>
          <label>Search User </label>
          <input type='search' onChange={this.searchChangeHandler} />
        </div>
        <UserList userList={this.state.filteredUsers} />
      </>
    );
  }
}

export default UserFinder;