// import {combineReducers} from 'redux'
// import todo from './todoReducer'

// const todoApp = combineReducers(
//     { 
//         todo: todo 
//     }
// )

// export default todoApp

import {combineReducers} from 'redux'

import todo from './todoReducer'
import setVisible from './visibleReducer'

const todoApp = combineReducers(
    { 
        todo:todo, 
        visible:setVisible 
    }
)

export default todoApp
