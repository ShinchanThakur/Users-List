import Card from '../UI/Card';
import styles from './UserList.module.css';

const UserList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.userList.map(user => <li key={user.id}>
                    {user.username} ({user.age} years old)
                </li>)
                }
            </ul>
        </Card>
    )
};

export default UserList;