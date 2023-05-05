import Card from '../UI/Card';
import Button from '../UI/Button'
import styles from './AddUser.module.css'
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [idCounter, setIdCounter] = useState(1);
    const [error, setError] = useState(null);
    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    }
    const onChangeAge = (event) => {
        setAge(event.target.value);
    }
    const validate = () => {
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({ title: 'Invalid input', message: 'Please enter (non empty) username and age' });
            return false;
        }
        if (+age < 1) {
            setError({ title: 'Invalid input', message: 'Please enter positive age' });
            return false;
        }
        return true;
    }
    const addNewUser = () => {
        const newUser = { username, age, id: idCounter + 1 };
        props.addNewUser(newUser);
    }
    const clearInputs = () => {
        setUsername('');
        setAge('');
    }
    const onSubmitHanlder = (event) => {
        event.preventDefault();
        if (validate() === false)
            return;
        addNewUser();
        setIdCounter(prevIdCounter => prevIdCounter + 1);
        clearInputs();
    }
    const errorResetHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorResetHandler} />}
            <Card className={styles.input}>
                <form onSubmit={onSubmitHanlder}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' onChange={onChangeUsername} value={username} />
                    <label htmlFor='age'>Age (years)</label>
                    <input type='number' onChange={onChangeAge} value={age} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;