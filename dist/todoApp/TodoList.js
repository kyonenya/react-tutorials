import React from 'react';
import { TodoItem } from './TodoItem';
export const TodoList = (props) => {
    const todos = props.todos.map(todo => {
        return (React.createElement(TodoItem, { key: todo.id, todo: todo, checkTodo: props.checkTodo, deleteTodo: props.deleteTodo }));
    });
    return (React.createElement("ul", null, todos));
};
