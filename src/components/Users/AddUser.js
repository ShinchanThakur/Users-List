import Card from '../UI/Card';
import Button from '../UI/Button'
import styles from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import { Component } from 'react';
import UserContext from '../../store/user-context';

class AddUser extends Component {
    static contextType = UserContext;
    constructor() {
        super();
        this.state = {
            username: '',
            age: '',
            idCounter: 1,
            error: null
        };
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.validate = this.validate.bind(this);
        this.addNewUser = this.addNewUser.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.onSubmitHanlder = this.onSubmitHanlder.bind(this);
        this.errorResetHandler = this.errorResetHandler.bind(this);
    }
    onChangeUsername(event) {
        this.setState({ username: event.target.value })
    }
    onChangeAge(event) {
        this.setState({ age: event.target.value })
    }
    validate() {
        if (this.state.username.trim().length === 0 || this.state.age.trim().length === 0) {
            this.setState({
                error: { title: 'Invalid input', message: 'Please enter (non empty) username and age' }
            })
            return false;
        }
        const age = +this.state.age;
        if (age < 1) {
            this.setState({
                error: { title: 'Invalid input', message: 'Please enter positive age' }
            })
            return false;
        }
        return true;
    }
    addNewUser() {
        const newUser = {
            username: this.state.username,
            age: this.state.age,
            id: this.state.idCounter + 1
        };
        this.context.addNewUser(newUser);
    }
    clearInputs() {
        this.setState({
            username: '',
            age: ''
        })
    }
    onSubmitHanlder(event) {
        event.preventDefault();
        if (this.validate() === false)
            return;
        this.addNewUser();
        this.setState(prevState => {
            return { idCounter: prevState.idCounter + 1 }
        })
        this.clearInputs();
    }
    errorResetHandler() {
        this.setState({ error: null })
    }
    render() {
        return (
            <Wrapper>
                {this.state.error && <ErrorModal title={this.state.error.title} message={this.state.error.message} onConfirm={this.errorResetHandler} />}
                <Card className={styles.input}>
                    <form onSubmit={this.onSubmitHanlder}>
                        <label htmlFor='username'>Username</label>
                        <input type='text' onChange={this.onChangeUsername} value={this.state.username} />
                        <label htmlFor='age'>Age (years)</label>
                        <input type='number' onChange={this.onChangeAge} value={this.state.age} />
                        <Button type='submit'>Add User</Button>
                    </form>
                </Card>
            </Wrapper>
        )
    }
}

export default AddUser;