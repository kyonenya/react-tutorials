import React from 'react';
export const TodoItem = (props) => {
    return (React.createElement("li", { key: props.todo.id },
        React.createElement("label", null,
            React.createElement("input", { type: "checkbox", checked: props.todo.isDone, 
                // クリックイベントをAppのstateまで伝播させる
                // 引数にTodoアイテムモデル一個を持たせて親に渡す
                onChange: () => props.checkTodo(props.todo) }),
            React.createElement("span", { className: props.todo.isDone ? 'done' : '' }, props.todo.title)),
        React.createElement("span", { className: "cmd", 
            /* 削除イベント */
            onClick: () => props.deleteTodo(props.todo) }, "[x]")));
};
