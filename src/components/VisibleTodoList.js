import React, {Component} from 'react'
import {connect} from 'react-redux'
import Todo from "./Todo";

import {toggleTodo} from '../actions'

class VisibleTodoList extends Component {

    checkTodo = (index) => {
        console.log("TodoList......INDEX: " + index)
        
        this.props.dispatch(toggleTodo(index))

    }

    render(){

        const todoTag = this.props.list.map(
            (todo, index) => 
                <Todo key={index} {...todo} onClick={() => this.checkTodo(index)} />)

        return(

            <ul>
                {todoTag}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {

    if(state.visible === 'INACTIVE'){

        console.log("inactive todos...")

        return {list: state.todo.list.filter(todo => todo.completed === true)}

    }else if(state.visible === 'ACTIVE'){

        return {list: state.todo.list.filter(todo => todo.completed === false)}

    }else {
        return state.todo
    }
    
}

export default connect(mapStateToProps)(VisibleTodoList)
