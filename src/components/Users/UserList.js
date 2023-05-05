import { Component } from 'react';
import Card from '../UI/Card';
import styles from './UserList.module.css';

class UserList extends Component {
    render() {
        return (
            <Card className={styles.users}>
                <ul>
                    {this.props.userList.map(user => <li key={user.id}>
                        {user.username} ({user.age} years old)
                    </li>)
                    }
                </ul>
            </Card>
        )
    }
}

export default UserList;