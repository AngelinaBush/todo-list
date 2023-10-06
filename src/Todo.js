import { Component } from "react";
import image from './target.png'

export class Todo extends Component {

    state = {
        userInput: '',
        userList: []
    }

    onChangeEvent = (e) => {
        this.setState({userInput: e})
    }

    addItem = (currentInput) => {
        if (currentInput === '') {
            alert ("Please enter your task")
        }
        else {
        let listArray = this.state.userList;
        listArray.push(currentInput)
        this.setState({userList: listArray, userInput: ''})
        }
    }

    removeItem = (deletingTodo) => {
        let newUserList= this.state.userList.filter((todo) => todo !== deletingTodo )
        this.setState({userList: newUserList})
    }

    deleteAll = () => {
        let listArray = this.state.userList;
        listArray = [];
        this.setState({userList: listArray})
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <input className="input"
                    type="text"
                    placeholder="Add something to do" 
                    value={this.state.userInput}
                    onChange={(e) => this.onChangeEvent(e.target.value)} />
                    <button className="addBtn" onClick={() => this.addItem(this.state.userInput)}>Save</button> 
                    <button className="deleteBtn" onClick={() => this.deleteAll()}>Delete All</button>
                </div>
                <div>
                    {this.state.userList.map((todo, index) => (
                        <div className="listToDo">
                            <p className="todo" key={index}>
                            <img src={image} alt="target" width="20px"/> {todo}</p>
                            <button className="removeBtn" onClick={() =>this.removeItem(todo)}>remove</button>
                        </div>
                    ))}
                    
                </div>
                </form>
            </div>
        )
    }
}