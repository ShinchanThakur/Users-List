import { Component } from "react";
import UserContext from "./user-context";

const INITIAL_USERLIST = [{ username: 'Rohan', age: 25, id: 1 }];

class UserProvider extends Component {
    constructor() {
        super();
        this.state = {
            userList: INITIAL_USERLIST
        }
        this.addNewUser = this.addNewUser.bind(this);
    }
    addNewUser(newUser) {
        this.setState((prevState) => {
            return { userList: [...prevState.userList, newUser] };
        })
    }

    render() {
        const userContext = {
            userList: this.state.userList,
            addNewUser: this.addNewUser
        }
        return (
            <UserContext.Provider value={userContext}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;