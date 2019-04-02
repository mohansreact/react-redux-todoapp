import React, {Component} from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let todos = this.state.todos.map((task, index) => 
                            <Todo task={task} key={index} />);
        
        return <div>
            <ul>{todos}</ul>
                </div>;
    }
}

export default connect()(TodoList);