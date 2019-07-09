 
 import React, {Component} from 'react'
 import {connect} from 'react-redux'
 class ControllerButtons extends Component {
    clickHandle = (flag) => {
        this.props.dispatch({type:'SET_VISIBLE', flag:flag })
    }

    render() {
        return(
        <div>
            <button onClick= {() => this.clickHandle('ALL')}> ALL </button>
            <button onClick= {() => this.clickHandle('ACTIVE')}> ACTIVE </button>
            <button onClick= {() => this.clickHandle('INACTIVE')}> INACTIVE </button>
        </div>
        )
    }
}

export default connect()(ControllerButtons)