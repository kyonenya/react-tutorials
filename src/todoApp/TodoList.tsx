import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import { /* todosModel, */todoModelable } from './todosModel';
import { TodoItem } from './TodoItem';

export const TodoList = (props: {todos: todoModelable[], checkTodo: (todo: todoModelable) => void}) => {

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