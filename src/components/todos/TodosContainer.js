import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

renderTodos = () => this.props.todos.map(todo => {
 return (
    <Todo 
      key={todo.id} 
      todo={todo} 
      delete={this.props.delete} 
    />
 )
})

  render() {
    return(
      <div>
        <h1>To Do:</h1>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    delete: todoText => dispatch({
        type: 'DELETE_TODO',
        payload: todoText
      })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
