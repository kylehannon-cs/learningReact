import React from 'react'
import '../styles/CheckBox.css'

import TodoItem from './TodoItem'
import todosData from "../todosData.js"
function CheckBox() {
    const todoComponents = todosData.map(item => <TodoItem key={item.id} item={item}/>)

    return (
        <div className = 'todo-list'>
            {todoComponents}
        </div>
    )
}

export default CheckBox