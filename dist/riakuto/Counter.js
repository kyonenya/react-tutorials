import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Statistic } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
//import { App } from './App';
const Counter = () => {
    const [count, setCount] = useState(0);
    const reset = () => setCount(0);
    const increment = () => setCount(c => c + 1);
    return (React.createElement(Card, null,
        React.createElement(Statistic, { className: "number-board" },
            React.createElement(Statistic.Label, null, "count"),
            React.createElement(Statistic.Value, null, count)),
        React.createElement(Card.Content, null,
            React.createElement("div", { className: "ui two buttons" },
                React.createElement(Button, { color: "red", onClick: reset }, "Reset"),
                React.createElement(Button, { color: "green", onClick: increment }, "+1")))));
};
ReactDOM.render(React.createElement(Counter, null), document.getElementById('root'));
