import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';

import { todosModel, todoModelable } from './todosModel';
import { TodoList } from './TodoList';

// 呼び出し可能オブジェクトによって関数に型付けする
export interface checkTodoable {
  (todo: todoModelable): void;
}

/**
 * 
 * 
 * @state todos: {id, title, isDone}[]
 */
export const App: FC = () => {
  const [todos, setTodos] = useState(todosModel);

  const checkTodo: checkTodoable = (todo) => {
    // setStateは (prevState) => newState の形で書く
    setTodos(prevTodos => {
      // スプレッド構文でオブジェクトのコピーをとる
      const todos = [ ...prevTodos ];
      const pos = todos.map(todo => {
        return todo.id;
      }).indexOf(todo.id);
      // トグルする
      todos[pos].isDone = !todos[pos].isDone;
      
      return todos;
    });
  }
  
  return (
    <div>
      <h2>My Todos</h2>
      <TodoList 
        todos={todos}
        checkTodo={checkTodo}
      />
    </div>
  );
}