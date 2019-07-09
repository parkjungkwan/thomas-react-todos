import React, {Component} from 'react'
import {addTodo} from "../actions";
import {connect} from 'react-redux';

class TodoInput extends Component {

    clickHandler = (e) => {

        const input = this.input

        this.props.dispatch(addTodo(input.value))

        input.value = ''
    }

    render() {
        return (
            <div>
                <input type='text' ref={(ref) => this.input = ref}></input>
                <button onClick={this.clickHandler}>CLICK</button>
            </div>
        )
    }

}

export default connect()(TodoInput)
