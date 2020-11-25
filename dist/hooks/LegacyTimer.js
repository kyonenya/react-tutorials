import React, { Component } from 'react';
const LIMIT = 60;
class LegacyTimer extends Component {
    constructor(props) {
        super(props);
        this.reset = () => {
            this.setState({ timeLeft: LIMIT });
        };
        this.tick = () => {
            this.setState(prevState => { timeLeft: prevState.timeLeft - 1; });
        };
        // 初回マウント直後に、
        this.componentDidMount = () => {
            // 1秒おきに減数メソッドを実行する。
            this.timerId = setInterval(this.tick, 1000);
        };
        // stateがアップデートされるたびに、
        this.componentDidUpdate = () => {
            const { timeLeft } = this.state;
            // 残り時間が0ならリセットする、を実行。
            if (timeLeft === 0) {
                this.reset();
            }
        };
        // コンポーネントが破棄される直前に、
        this.componentWillUnmount = () => {
            // タイマーも破棄。
            if (this.timerId)
                clearInterval(this.timerId);
        };
        this.render = () => {
            const { timeLeft } = this.state;
            return (React.createElement("div", { className: "container" },
                React.createElement("p", null, "\u6B8B\u308A\u6642\u9593"),
                React.createElement("p", null, timeLeft),
                React.createElement("button", { onClick: this.reset }, "\u30EA\u30BB\u30C3\u30C8")));
        };
        this.state = { timeLeft: LIMIT };
    }
}
export default LegacyTimer;
