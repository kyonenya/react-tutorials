import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import { TodoItem } from './TodoItem';
import { /* todosModel, */todoModelable } from './todosModel';
import { checkTodoable } from './App';

/**
 * 
 * 
 * 
 */
export const TodoList = (props: {todos: todoModelable[], checkTodo: checkTodoable}) => {

  const todos = props.todos.map(todo => {
    return (
      <TodoItem 
        key={todo.id}
        todo={todo}
        checkTodo={props.checkTodo}
      />
    );
  });
  return (
    <ul>
      {todos}
    </ul>
  );
}