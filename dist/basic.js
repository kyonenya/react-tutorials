import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// ■hooksを使う（ステートフック）
const Counter = (props) => {
    // [現在のstateの値, それを更新するための関数] = useState(初期値);
    const [count, setCount] = useState(0);
    return React.createElement("li", { style: { backgroundColor: props.color }, 
        // 更新した値をsetCountの引数に渡す
        // 第一引数にprevStateをとる
        onClick: () => setCount(count => count + 1) }, count);
};
// ■ 6-9. 関数コンポーネントとprops
function Counter_function(props) {
    // クリックイベント
    const clicked = (color) => {
        alert(color);
    };
    return React.createElement("li", { style: { backgroundColor: props.color }, 
        // 9. イベントに引数を渡したい場合はonClickに無名関数を渡す
        onClick: () => clicked(props.color) }, "0");
}
// TS：<Props, State>の型をジェネリクスとして設定する
class Counter_class extends React.Component {
    // 11. Stateをコンストラクターで定義する
    constructor(props) {
        super(props); // 親クラスのprops受け取りも定義し直す
        this.countUp = () => {
            // 13. setState stateはカプセル化されているため
            this.setState(prevState => {
                return {
                    count: prevState.count + 1,
                };
            });
            // setStateされるたびごとにrenderメソッドが走る
        };
        // JSXは直接リターンせず、renderメソッドで返す
        this.render = () => {
            return React.createElement("li", { 
                // thisでpropsを指定する
                // propsは親クラスのReact.Componenクラスに渡されている
                style: { backgroundColor: this.props.color }, onClick: this.countUp }, this.state.count);
        };
        // stateをオブジェクトとして保持する
        this.state = {
            count: 0
        };
    }
}
ReactDOM.render(React.createElement("div", { className: "container" },
    React.createElement("ul", null,
        React.createElement(Counter, { color: "tomato" }),
        React.createElement(Counter, { color: "skyblue" }),
        React.createElement(Counter, { color: "limegreen" }))), document.getElementById('root'));
// ■ 4-5. JSXの基本
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
    name), document.getElementById('root1'));
