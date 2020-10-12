import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';

import { todoModelable } from './todosModel';

export const TodoItem = (props: {todo: todoModelable, checkTodo: (todo: todoModelable) => void}) => {
  return (
    <li key={props.todo.id}>
      <label>
        <input 
          type="checkbox" 
          checked={props.todo.isDone}
          // クリックイベントをAppのstateまで伝播させる
          // 引数にTodoアイテムモデル一個を持たせて親に渡す
          onChange={() => props.checkTodo(props.todo)}
        />
        {props.todo.title}
      </label>
    </li>
  );
}