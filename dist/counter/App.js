import React from 'react';
import { CounterList } from './CounterList';
/**
 * App
 * 共通要素でstateを管理する（14.）
 * @render CounterList(counters)
 */
export class App extends React.Component {
    constructor(props) {
        super(props); // 実際にはpropsを受け取らなくても再定義してやる必要がある
        // 18. thisで渡ってきたカウンターのidと同じカウンターのcountを1増やす
        this.countUp = (counter) => {
            this.setState((prevState) => {
                // prevState.count++ とするわけにはいかないので、値のコピーをとる（イミュータブルに）
                const counters = prevState.counters.map((counter) => {
                    return { id: counter.id, count: counter.count, color: counter.color };
                });
                const pos = prevState.counters.map((counter) => {
                    return counter.id; // [A, B, C]
                }).indexOf(counter.id); // Cなら'2'
                counters[pos].count++;
                return {
                    counters: counters,
                    total: prevState.total + 1,
                };
            });
        };
        this.render = () => {
            return React.createElement("div", { className: "container" },
                React.createElement(CounterList
                // 子コンポーネントのpropsにstateを丸ごと渡す
                , { 
                    // 子コンポーネントのpropsにstateを丸ごと渡す
                    counters: this.state.counters, 
                    // 17. state更新スイッチを末端の子コンポーネントまで渡していく
                    countUp: this.countUp }),
                React.createElement("div", null,
                    "\u5408\u8A08: ",
                    this.state.total));
        };
        this.state = {
            // 15. 各カウンターのstateをここから分配していく
            counters: [
                { id: 'A', count: 0, color: 'tomato' },
                { id: 'B', count: 0, color: 'skyblue' },
                { id: 'C', count: 0, color: 'limegreen' },
            ],
            total: 0,
        };
    }
}
// それぞれのカウンターがバラバラにカウント数を持っているが、それを合計したカウント数を持ちたい
// -> Appコンポーネントという親コンポーネントを定義する
