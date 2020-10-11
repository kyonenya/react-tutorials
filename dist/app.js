import React from 'react';
import ReactDOM from 'react-dom';
// 子コンポーネントはstateを持つ必要がないので関数コンポーネントにする
/**
 *
 * @params counter
 */
const Counter = (props) => {
    console.log(props.counter);
    return React.createElement("li", { style: { backgroundColor: props.counter.color } },
        props.counter.id,
        "\uFF1A",
        props.counter.count);
};
// 16. コンポーネントをループで一括生成する
/**
 *
 * @params counters
 */
const CounterList = (props) => {
    const counters = props.counters.map((counter) => {
        return React.createElement(Counter, { counter: counter, 
            // ユニークなkeyが必要、ループで処理するコンポーネントには
            key: counter.id });
    });
    return React.createElement("ul", null, counters);
};
// 14. 共通要素でstateを管理する
/**
 * App
 *
 */
class App extends React.Component {
    constructor(props) {
        super(props); // 実際にはpropsを受け取らなくても再定義してやる必要がある
        this.render = () => {
            return React.createElement("div", { className: "container" },
                "// \u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u5404state\u3092\u4E38\u3054\u3068\u6E21\u3059",
                React.createElement(CounterList, { counters: this.state.counters }),
                React.createElement("div", null, "\u5408\u8A08: 36"));
        };
        this.state = {
            // 15. 各カウンターのstateをここから分配していく
            counters: [
                { id: 'A', count: 0, color: 'tomato' },
                { id: 'B', count: 0, color: 'skyblue' },
                { id: 'C', count: 0, color: 'limegreen' },
            ]
        };
    }
}
// それぞれのカウンターがバラバラにカウント数を持っているが、それを合計したカウント数を持ちたい
// -> Appコンポーネントという親コンポーネントを定義する
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
