import React, {Component} from 'react'
import {connect} from 'react-redux'
import Todo from "./Todo";

import {toggleTodo} from '../actions'

class TodoList extends Component {

    checkTodo = (index) => {
        console.log("TodoList......INDEX: " + index)
        
        this.props.dispatch(toggleTodo(index))

    }

    render(){

        const todoTag = this.props.list.map(
            (todo, index) => <Todo key={index} {...todo} onClick={() => this.checkTodo(index)} />)

        return(

            <ul>
                {todoTag}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {

    return state.todo
}

export default connect(mapStateToProps)(TodoList)
