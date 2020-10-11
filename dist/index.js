import React from 'react';
import ReactDOM from 'react-dom';
// functionで定義する
function Counter(props) {
    // クリックイベント
    const clicked = (color) => {
        alert(color);
    };
    return React.createElement("li", { style: { backgroundColor: props.color }, 
        // 9. イベントに引数を渡したい場合はonClickに無名関数を渡す
        onClick: () => clicked(props.color) }, "0");
}
ReactDOM.render(React.createElement("div", { className: "container" },
    React.createElement("ul", null,
        React.createElement(Counter, { color: "tomato" }),
        React.createElement(Counter, { color: "skyblue" }),
        React.createElement(Counter, { color: "limegreen" }))), document.getElementById('root'));
// 4-5. JSXの基本
const name = '隆史';
const showMessage = () => {
    alert('こんにちは');
};
ReactDOM.render(React.createElement("div", { className: "box", 
    // style属性をオブジェクトで指定する
    // JavaScriptの式なので合わせて二重波括弧になる（クォーテーションは無し）
    style: { width: 100, height: 100, backgroundColor: 'tomato' }, 
    // onClick属性はクォーテーション無しの波括弧で指定する
    onClick: showMessage },
    "// JavaScript\u306E\u5F0F\u306F\u6CE2\u62EC\u5F27\u3067\u57CB\u3081\u8FBC\u3080",
    name), document.getElementById('foo'));
