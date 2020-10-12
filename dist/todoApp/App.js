import React, { useState } from 'react';
import { todosModel } from './todosModel';
import { TodoList } from './TodoList';
export const App = () => {
    const [todos, setTodos] = useState(todosModel);
    const checkTodo = (todo) => {
        // setStateは (prevState) => newState の形で書く
        setTodos(prevTodos => {
            // スプレッド構文でオブジェクトのコピーをとる
            const todos = [...prevTodos];
            const pos = todos.map(todo => {
                return todo.id;
            }).indexOf(todo.id);
            // トグル
            todos[pos].isDone = !todos[pos].isDone;
            return todos;
        });
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, "My Todos"),
        React.createElement(TodoList, { todos: todos, checkTodo: checkTodo })));
};
