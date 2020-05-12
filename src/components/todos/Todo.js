import React from 'react'

const Todo = props => <div>{props.text}<button onClick={() => props.delete(props.todo.id)}>DELETE</button></div>

export default Todo;
