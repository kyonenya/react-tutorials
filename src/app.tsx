import React, { FC } from 'react';
import ReactDOM from 'react-dom';

type Counter = {
  id: string,
  count: number,
  color: string,
}

/**
 * 
 * @params counter
 */
const Counter = (props: {counter: Counter}) => {
  console.log(props.counter);
  return  <li
    style={{backgroundColor: props.counter.color}}
  >
    {props.counter.id}：{props.counter.count}
  </li>; 
}
// 子コンポーネントはstateを持つ必要がないので関数コンポーネントにした


// 16. コンポーネントをループで一括生成する
/**
 * 
 * @params counters
 * @render Counter(counter)
 */
const CounterList = (props: {counters: Counter[]}) => {
  const counters = props.counters.map((counter: Counter) => {
    return <Counter 
      counter={counter}
      // ユニークなkeyが必要、ループで処理するコンポーネントには
      key={counter.id}
    />
  });
  return <ul>
    {counters}
   </ul>
}


// 14. 共通要素でstateを管理する
/**
 * App
 * @render CounterList(counters)
 */
class App extends React.Component<{}, {counters: Counter[]}> {
  constructor(props: {}) {
    super(props);  // 実際にはpropsを受け取らなくても再定義してやる必要がある
    this.state = {
      // 15. 各カウンターのstateをここから分配していく
      counters: [
        {id: 'A', count: 0, color: 'tomato'},
        {id: 'B', count: 0, color: 'skyblue'},
        {id: 'C', count: 0, color: 'limegreen'},
      ]
    }
  }
  render = () => {
    return <div className="container">
      {/* 子コンポーネントに各stateを丸ごと渡す */}
      <CounterList counters={this.state.counters}/>
      <div>合計: 36</div>
    </div>
  }
}
// それぞれのカウンターがバラバラにカウント数を持っているが、それを合計したカウント数を持ちたい
// -> Appコンポーネントという親コンポーネントを定義する

ReactDOM.render(
  <App />,
  document.getElementById('root')
);